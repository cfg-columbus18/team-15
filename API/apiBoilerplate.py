##Aaron Lopez(77%) & Zach Moore(23%), 10/20/18
##Queries mongoDB searches and returns the data to
##node.js for compiling
##get_db() connects to configured db and returns it for further manipulation.
##user_profile() returns a cursor pointing to the database entry of the mentor whose profile page is being called.
##getMentorTable() queries the entire mentor table, and returns the cursor for manipulation.
##createMentor() inserts a new entry into the mentors table.
##matchMentee() inserts a new entry into the mentee table, used for matching.py to manipulate specifically.

# Aaron Lopez
# Queries mySQL searches and returns the data to
# Python Flask for compiling
# get_db() connects to configured db
##
import mysql.connector
from flask import Flask, request, jsonify
from matching import matching
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
# connects to database
def get_db():
    db = mysql.connector.connect(host="localhost",
                                 port="3306",
                                 user="root",
                                 db="grsi")
    return db

def getMentorTable(db):#TODO: for less redundancy, implement caching.
    cursor = db.cursor(buffered=True)
    mentorTable = ("SELECT * FROM mentor")
    cursor.execute(mentorTable)

    return cursor

@app.route('/', methods=['POST'])
def getMentors():
	db = get_db()
	mentors = getMentorTable(db)
	mentee = request.get_json()
	print(mentee)
	matches = matching(mentors, mentee)
	return jsonify(matches), 201

##plans to implement later.
# def user_profile(mentor, db):
# 	cursor = db.cursor(buffered = True)
# 	query = ("SELECT * FROM mentor WHERE name = %(name)s")
# 	mentor_data = {
# 		'name' : mentor[0]##TODO: add more entries if needed, change placement array if different, or just a string is a param.
# 		}
# 	cursor.execute(query,mentor_data )
# 	return cursor
#
# #queries for mentor table when needed.
# def getMentorTable(db):
# 	cursor = db.cursor(buffered = True)
# 	mentorTable = ("SELECT * FROM mentor")
# 	cursor.execute(mentorTable)
#
# 	return cursor

# def createMentor(mentor, db):
# 	cursor = db.cursor(buffered = True)
# 	mentorInsert =  ("INSERT INTO mentor "
# 				  "(idmentee, name, country, timezone, experience, phone, language, preferred_platform, sponsorship_stage, expertise, email, bio)"
# 				 "VALUES (%(name)s, %(country)s, %(timezone)s, %(experience)s, %(phone)s, %(language)s, %(preferred_platform)s, %(sponsorship_stage)s, %(expertise)s, %(email)s, %(bio)s)")
# 	data_mentor = {
# 		'name' : mentor[name],
# 		'country' : mentor[country],
# 		'timezone' : mentor[timezone],
# 		'experience' : mentor[experience],
# 		'phone' : mentor[phone],
# 		'language' : mentor[language],
# 		'preferred_platform' : mentor[preferred_platform],
# 		'sponsorship_stage' : mentor[sponsorship_stage],
# 		'expertise' : mentor[expertise],
# 		'email' : mentor[email],
# 		'bio' : mentor[bio]
# 		}
# 	cursor.execute(mentorInsert, data_mentor)
# 	db.commit()
# 	cursor.close()



# def user_profile(mentor, db):  # TODO:change users to correct table.
#     cursor = db.cursor(buffered=True)
#     query = ("SELECT * FROM mentor WHERE name = %(name)s")
#     mentor_data = {
#         'name': mentor[name]
#     }
#     cursor.execute(query, mentor_data)
#     return query
#
#
# queries for mentor table when needed.


# def createMentor(mentor, db):
#     cursor = db.cursor(buffered=True)
#     mentorInsert = ("INSERT INTO mentor "
#                     "(idmentee, name, country, timezone, experience, phone, language, preferred_platform, sponsorship_stage, expertise, email, bio)"
#                     "VALUES (%(name)s, %(country)s, %(timezone)s, %(experience)s, %(phone)s, %(language)s, %(preferred_platform)s, %(sponsorship_stage)s, %(expertise)s, %(email)s, %(bio)s)")
#     data_mentor = {
#         'name': mentor[name],
#         'country': mentor[country],
#         'timezone': mentor[timezone],
#         'experience': mentor[experience],
#         'phone': mentor[phone],
#         'langmatches = uage': mentor[language],
#         'preferred_platform'matches mentor[preferred_platform],
#         'sponsorship_stage': mentor[sponsorship_stage],
#         'expertise': mentor[expertise],
#         'email': mentor[email],
#         'bio': mentor[bio]
#     }
#     cursor.execute(mentorInsert, data_mentor)
#     db.commit()
#     cursor.close()
#


# @app.route('/mentor', methods=['POST'])
# def matchMentee():
# 	db = get_db()
#     cursor = db.cursor(buffered=True)
#     menteeInsert = ("INSERT INTO mentee "
#                     "(idmentee, name, country, timezone, experience, phone, language, preferred_platform, sponsorship_stage, expertise, email, bio)"
#                     "VALUES (%(name)s, %(country)s, %(timezone)s, %(experience)s, %(phone)s, %(language)s, %(preferred_platform)s, %(sponsorship_stage)s, %(expertise)s, %(email)s, %(bio)s)")
#     data_mentee = {
#         'name': mentee[name],
#         'country': mentee[country],
#         'timezone': mentee[timezone],
#         'experience': mentee[experience],
#         'phone': mentee[phone],
#         'language': mentee[language],
#         'preferred_platform': mentee[preferred_platform],
#         'sponsorship_stage': mentee[sponsorship_stage],
#         'expertise': mentee[expertise],
#         'email': mentee[email],
#         'bio': mentee[bio]
#     }
#     cursor.execute(menteeInsert, data_mentee)
#     db.commit()
#     cursor.close()
#     mentee_test = request.get_json()
    # mentee_info = {
    # 	"Country": mentee_test["country"],
    # 	"Experince": mentee_test["experience"],
    # 	"Time-Zone": mentee_test["timezone"],
    # 	"Language": mentee_test["language"],
    # 	"Country-Weight": mentee_test["country-weight"],
    # 	"Experience-Weight": mentee_test["experience-weight"],
    # 	"Language-Weight": mentee_test["language-weight"],
    # 	"Time-Zone-Weight": mentee_test["timezone-weight"]
    # }
    # matching(mentee)
    # return jsonify(mentee_test), 201
