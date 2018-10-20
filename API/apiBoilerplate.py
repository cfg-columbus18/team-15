##Aaron Lopez
##Queries mongoDB searches and returns the data to
##node.js for compiling
##get_db() connects to configured db
##
import mysql.connector
from flask import Flask, request, jsonify
from flask import current_app, g
from flask.cli import with_appcontext
import json

app = Flask(__name__)
##connects to database

def get_mysqlDB():
	db = mysql.connector.connect(host = "localhost",
					  port = "3306",
					  user= "root",
					  passwd = "root",
					  db = "world")
	curA = db.cursor()
	query = ("SELECT * FROM city")
	cur.execute(query)
	return cur

def get_db():
	GSRI = client.GSRI
##
	return GSRI

def close_db():
	db = g.pop('db', None)
	if db is not None:
		db.close()


def user_profile(mentorusername, db):##TODO:change users to correct table.
	mentors = db["Mentors"]
	user = db.mentors.find_one_or_404({"_id": mentorusername})
	return user

##queries for mentor table when needed.
def getMentorTable(db):
	mentorTable = db["Mentors"]
	return mentorTable

def createMentor(mentor, db):
	mentors = db["Mentors"]
	mentorInsert = {
		'Name' : mentor[name],
		'Experience' : mentor[experience],
		'timezone' : mentor[TZ],
		'phone' : mentor[contact],
		'email' : mentor[email],
		'location' : mentor[location],
		'expertise': mentor[expertise],
		'language' : mentor[language],
		'platform' : mentor[platform],
		'sponsorstage' : mentor[sponsorStage],
		'bio' : mentor[Bio]
		}
	mentors.insert_one(mentorInsert)

@app.route('/')
def test():
	return 'Hello'


@app.route('/mentor', methods=['POST'])

def matchMentee():
	mentee_test = request.get_json()
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
	return jsonify(mentee_test), 201
