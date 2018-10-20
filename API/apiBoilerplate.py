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
	client = pymongo.MongoClient("mongodb://admin:team15@cluster0-shard-00-00-iuza6.mongodb.net:27017,cluster0-shard-00-01-iuza6.mongodb.net:27017,cluster0-shard-00-02-iuza6.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true")
	GRSI = client["GRSI"]
	return GRSI
		

def close_db():
	db = g.pop('db', None)
	if db is not None:
		db.close()

@app.route("/user/<mentorusername>")
def user_profile(mentorusername, db):##TODO:change users to correct table.
	mentors = db["Mentors"]
	user = db.mentors.find_one_or_404({"_id": mentorusername})
	return user

##queries for mentor table when needed.
@app.route("/recommended", methods = ['GET'])
def getMentorTable(db):
	mentorTable = db["Mentors"]
	return mentorTables

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

def createMentee(mentee, db):
	mentees = db["Mentees"]
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
	mentee.insert_one(menteeInsert)
