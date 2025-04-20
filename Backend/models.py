from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()


user_job_association = db.Table(
    'user_job',
    db.Column('user_id', db.Integer, db.ForeignKey('user.id'), primary_key=True),
    db.Column('job_id', db.Integer, db.ForeignKey('job.id'), primary_key=True)
)

shortlist_table = db.Table(
    'shortlist_table',
    db.Column('user_id', db.Integer, db.ForeignKey('user.id'), primary_key=True),
    db.Column('job_id', db.Integer, db.ForeignKey('job.id'), primary_key=True)
)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100),  nullable=False)
    college_name = db.Column(db.String(200))
    resume_text = db.Column(db.Text)
    password = db.Column(db.String(20))
    actor = db.Column(db.Boolean, default=False) # false for student 

    jobs = db.relationship('Job', secondary=user_job_association, back_populates='users')
    shortlist_company = db.relationship('Job', secondary=shortlist_table, back_populates='shortlist_students')

    def __repr__(self):
        return f"<User {self.name}>"
    

class Job(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    company_name = db.Column(db.String(100), nullable=False)
    package_offered = db.Column(db.Float, nullable=False)
    job_role = db.Column(db.String(100), nullable=False)
    job_description = db.Column(db.Text, nullable=False)
    deadline = db.Column(db.DateTime, nullable=False)

    users = db.relationship('User', secondary=user_job_association, back_populates='jobs')
    shortlist_students = db.relationship('User', secondary=shortlist_table, back_populates='shortlist_company')

    def __repr__(self):
        return f"<Job {self.job_role} at {self.company_name}>"
