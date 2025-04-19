from flask import Flask, request, Response
from flask_restful import Api
from flask_cors import CORS
from models import db
from resources import AddUserToJobResource, CompanyResource, JobResource, ShortlistStudents, UserLogin, UserRegistration
import os
from dotenv import load_dotenv
app = Flask(__name__)
api = Api(app)
CORS(app, resources={r"/*": {"origins": "*"}})
load_dotenv()
host = os.getenv("MYSQL.HOST")
port = os.getenv("MYSQL.PORT")
user = os.getenv("MYSQL.USER")
password = os.getenv("MYSQL.PASSWORD")
database = os.getenv("MYSQL.PROJECT")


app.config['SQLALCHEMY_DATABASE_URI'] = f'mysql+pymysql://{user}:{password}@{host}:{port}/{database}'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False


app.config['UPLOAD_FOLDER'] = 'uploads/'

# @app.before_request
# def handle_preflight():
#     if request.method == "OPTIONS":
#         res = Response()
#         print("Hey")
#         res.headers['X-Content-Type-Options'] = '*'
#         return res


db.init_app(app)
api.add_resource(UserRegistration, '/register')
api.add_resource(UserLogin, '/login')
api.add_resource(JobResource, '/job')
api.add_resource(AddUserToJobResource, '/addUserToJob')
api.add_resource(ShortlistStudents, '/shortlistStudents')
api.add_resource(CompanyResource, '/company')


if __name__ == '__main__':
    # with app.app_context():
    #     db.create_all()
    app.run(debug=True)
