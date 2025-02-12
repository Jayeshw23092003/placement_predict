from flask_restful import Resource
from flask import request, jsonify
from flask_cors import cross_origin
from werkzeug.utils import secure_filename
from models import db, User, Job
from PyPDF2 import PdfReader
from prediction import Shortlist
import os
from datetime import datetime


class UserLogin(Resource):
    
    def post(self):

        data = request.get_json()

        if not data or 'email' not in data or 'password' not in data:
            return {'error': 'Email and password are required'}, 400
        

        email = data['email']
        password = data['password']

        user = User.query.filter_by(email=email, password=password).first()

        if not user:
            return {'error': 'User not found'}, 404
        
        return {
            'message': 'Login Successful',
            'user': {
                'id': user.id, 
                'name': user.name, 
                'email': user.email, 
                'actor': user.actor
            }}, 200



class UserRegistration(Resource):

    @staticmethod
    def allowed_file(filename):
        return '.' in filename and filename.rsplit('.', 1)[1].lower() in {'pdf'}
    
    @staticmethod
    def upload_file(resume_file):
        resume_filename = secure_filename(resume_file.filename)
        resume_url = os.path.join('uploads/', resume_filename)
        resume_file.save(resume_url)
        return resume_url
    
    @staticmethod
    def extract_text_from_pdf(pdf_path):
        try:
            reader = PdfReader(pdf_path)
            text = ""
            for page in reader.pages:
                text += page.extract_text()
            return text.strip()
        except Exception as e:
            print(f"Error reading {pdf_path}: {e}")
            return ""


    def post(self):
        """
        Use content-type: multipart/form-data while sending the data
        """

        data = request.get_json()
        # print(data)
        if not data:
            return {'error': 'Invalid request format'}, 400

        required_fields = ['full_name', 'email', 'password', 'actor' ]
        if not all(field in data for field in required_fields):
            return {'error': 'Missing required fields'}, 400
        

        name = data['full_name']
        email = data['email']
        password = data['password']
        actor = data['actor']
        
        print(name, email, password, actor)
        # resume_file = request.files.get('resume')
        # resume_text = ''


        # if resume_file and UserRegistration.allowed_file(resume_file.filename):
        #     resume_url = UserRegistration.upload_file(resume_file)
        #     resume_text = UserRegistration.extract_text_from_pdf(resume_url)


        # new_user = User(name=name, email=email, password=password, actor=actor)
        # db.session.add(new_user)
        # db.session.commit()

        return {'message': 'User registered successfully', 'user': {'name': name, 'email': email}}, 200



    def put(self):
        """
        Use content-type: multipart/form-data while sending the data
        """

        data = request.form
        if not data or 'id' not in data:
            return {'error': 'User ID is required'}, 400

        user = User.query.get(data['id'])
        if not user:
            return {'error': 'User not found'}, 404
        

        user_id = data.get('id')  
        user = User.query.get(user_id)

        if not user:
            return {'error': 'User not found'}, 404

        user.name = data.get('full_name', user.name)
        user.email = data.get('email', user.email)
        user.college_name = data.get('college_name', user.college_name)

        resume_file = request.files.get('resume')

        if resume_file and UserRegistration.allowed_file(resume_file.filename):
            resume_url = UserRegistration.upload_file(resume_file)
            user.resume_text = UserRegistration.extract_text_from_pdf(resume_url)

        db.session.commit()

        return {'message': 'User updated successfully', 'user': {'name': user.name, 'email': user.email}}
    


class JobResource(Resource):

    def get(self):
        
        jobs = Job.query.all() 
        
        if not jobs:
            return {"message": "No jobs found"}, 404

        jobs_list = [
            {
                "id": job.id,
                "company_name": job.company_name,
                "package_offered": job.package_offered,
                "job_role": job.job_role,
                "job_description": job.job_description
            }
            for job in jobs
        ]

        return {"jobs": jobs_list}, 200



    def post(self):

        data = request.get_json()
        company_name = data.get('company_name')
        package_offered = data.get('package_offered')
        job_role = data.get('job_role')
        job_description = data.get('job_description')
        deadline_str = data.get('deadline')  # date format "%Y-%m-%d %H:%M:%S"

        if not all([company_name, package_offered, job_role, job_description, deadline_str]):
            return {'error': 'All fields are required'}, 400

        try:
            deadline = datetime.strptime(deadline_str, r"%Y-%m-%d %H:%M:%S")
        except ValueError:
            return {'error': 'Invalid date format. Use YYYY-MM-DD'}, 400

        new_job = Job(
            company_name=company_name,
            package_offered=float(package_offered),
            job_role=job_role,
            job_description=job_description,
            deadline=deadline
        )

        db.session.add(new_job)
        db.session.commit()

        return {'message': 'Job added successfully', 'job_id': new_job.id}


    def put(self, job_id):

        job = Job.query.get(job_id)
        if not job:
            return {'error': 'Job not found'}, 404

        data = request.get_json()
        job.company_name = data.get('company_name', job.company_name)
        job.package_offered = float(data.get('package_offered', job.package_offered))
        job.job_role = data.get('job_role', job.job_role)
        job.job_description = data.get('job_description', job.job_description)

        deadline_str = data.get('deadline')
        if deadline_str:
            try:
                job.deadline = datetime.strptime(deadline_str, "%Y-%m-%d")
            except ValueError:
                return {'error': 'Invalid date format. Use YYYY-MM-DD'}, 400

        db.session.commit()

        return {'message': 'Job updated successfully', 'job_id': job.id}



class AddUserToJobResource(Resource):

    def post(self):

        args = request.get_json()

        
        user_id = args.get('user_id')
        job_id = args.get('job_id')

        if not all([user_id, job_id]):
            return {'error': 'All fields are required'}, 400
        
        user = User.query.get(user_id)
        job = Job.query.get(job_id)

        if not user:
            return {"message": f"User with ID {user_id} not found"}, 404
        if not job:
            return {"message": f"Job with ID {job_id} not found"}, 404
        
        if job.deadline < datetime.now():
            return {"message": f"Deadline passed away. It was {job.deadline}"}, 400

        if user not in job.users:
            job.users.append(user)
            db.session.commit()

        return {
            "message": f"User {user.name} has been added to the job {job.job_role} at {job.company_name}."
        }, 201
    
    

class ShortlistStudents(Resource):

    def post(self):

        data = request.get_json()
        job_id = data.get('job_id')
        max_students = data.get('max_students')

        if not all([job_id, max_students]):
            return {'error': 'All fields are required'}, 400
        
        shortlisted_ids = Shortlist(job_id=job_id, max_students=max_students).get_shortlisted_stuent_ids()

        students = User.query.filter(User.id.in_(shortlisted_ids)).all()
        
        student_list = [
            {"id": student.id, "name": student.name} for student in students
        ]

        return {"shortlisted_students": student_list}, 200

        
