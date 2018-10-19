##Aaron Lopez
##Queries mongoDB searches and returns the data to 
##node.js for compiling
##get_db() connects to configured db
##
import pymongo
import Flask
from pymongo import MongoClient
from flask import current_app, g
from flask.cli import with_appcontext

def init_db():
	client = MongoClient()

def get_db():
	g.db = client.mentor
	detectTypes =

def close_db():



def get():

def create():
