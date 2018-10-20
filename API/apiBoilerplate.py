##Aaron Lopez
##Queries mongoDB searches and returns the data to
##node.js for compiling
##get_db() connects to configured db
##
import pymongo
from flask import Flask
from flask_pymongo import PyMongo
from pymongo import MongoClient
from flask import current_app, g
from flask.cli import with_appcontext


##connects to database

def get_db():
	app = Flask(GRSI)
	app.config["MONGO_URI"] = "mongodb://localhost:27017/GRSI"
	
	mongo = PyMongo(app)

def close_db():
	db = g.pop('db', None)
	if db is not None:
		db.close()

@app.route("/user/<mentorusername>")
def user_profile(mentorusername):##TODO:change users to correct table. 
    user = mongo.db.mentors.find_one_or_404({"_id": mentorusername})
    return user

##queries for mentor table when needed.
@app.route("/recommended", methods = ['GET'])
def getMentorTable():
	mentorTable = mongo.db.mentors
	return mentorTables

def createMentor(mentor):
	mentorInsert = {
		'Name' : mentor[name],
		'Experience' : mentor[experience],
		'timezone' : mentor[TZ],
		'phone' : mentor[contact],
		'email' : mentor[email]
		'location' : mentor[location],
		'expertise': mentor[expertise],
		'language' : mentor[language],
		'platform' : mentor[platform],
		'sponsorstage' : mentor[sponsorStage],
		'bio' : mentor[Bio]
		}	
	mongo.db.mentors.insert_one(mentorInsert)

def createMentee(mentee):
	menteeInsert = {
		'name' : mentee[Name],
		'experience' : mentee[experience],
		'timezone' : mentee[TZ],
		'phone' : mentee[contact],
		'email' : mentee[email],
		'location' : mentee[location],
		'expertise': mentee[expertise],
		'language' : mentee[language],
		'platform' : mentee[platform],
		'sponsorstage' : mentee[sponsorStage],
		'bio' : mentee[Bio]
		}
	mongo.db.mentee.insert_one(menteeInsert)
