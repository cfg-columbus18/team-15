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

@app.route("/user/<username>")
def user_profile(username):
    user = mongo.db.users.find_one_or_404({"_id": username})
    return render_template("user.html",
        user=user)

def add_db():

