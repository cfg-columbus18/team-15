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
	app = Flask(__name__)
	app.config["MONGO_URI"] = "mongodb://localhost:27017/DATABASENAMEHERE"
	mongo = PyMongo(app)##TODO: Change Databasename to official one.	

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
		'name' : mentor[name],
		'rating' : mentor[rating],
		'location' : mentor[location],
		'experience': mentor[experience],
		'time_zone' : mentor[time_zone]
		}	
	mongo.db.mentors.insert_one(mentorInsert)

def createMentee(mentee):
	menteeInsert = {
		'name' : mentee[name],
		'location' : mentee[location],
		'time-zone' : mentee[timezone],
		'language' : mentee[language]
		}
	mongo.db.mentee.insert_one(menteeInsert)
