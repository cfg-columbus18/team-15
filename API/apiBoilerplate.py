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
