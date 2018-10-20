##Aaron Lopez
##Queries mongoDB searches and returns the data to
##node.js for compiling
##get_db() connects to configured db
##
import pymongo
import MySQLdb
from flask import Flask
from flask_pymongo import PyMongo
from pymongo import MongoClient
from flask import current_app, g
from flask.cli import with_appcontext


##connects to database

def get_mysqlDB():
	db = MySQLdb.connect(host = "localhost",
					  port = "3306",
					  user= "root",
					  passwd = "",
					  db = "test")
	cursor = db.cursor()
	cusor.execute("SELECT * FROM test")
	numrows = cursor.rowcount

	for x in range(0, numrows):
		row = cursor.fetchone()
		print row[0], "-->", row[1]
input("ambasda")
db.close()

get_mysqlDB()

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
