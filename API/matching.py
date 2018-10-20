#!/usr/bin/python
from apiBoilerplate import get_db
from apiBoilerplate import getMentorTable
import mongoengine 

db = get_db()
table = getMentorTable(db)

def matching (mentors):
    match_array = []
    mentee_info = {
        "Experience": 8,
        "Country": "US",
        "TZ": "east",
        "Language": "859-200",
        "Platform": "Twitter",
        "Stage": "Arrival",
        "Expertise": "Housing",
    }


    for mentor in mentors:
        mentor_info = {
            "Name": mentor["Name"],
            "Bio": mentor["Bio"],
            "Experience": mentor["Experience"],
            "Country": mentor["Country"],
            "TZ": mentor["TZ"],
            "Phone": mentor["Phone"],
            "Language": mentor["Language"],
            "Platform": mentor["Platform"],
            "Stage": mentor["Stage"],
            "Expertise": mentor["Expertise"],
            "match_score": 0
        }

        for key in mentor_info:
            if key in mentee_info:
                if(mentor[key] == mentee_info[key]):
                     mentor_info["match_score"] = mentor_info["match_score"] + 1


        match_array.append(mentor_info)

    sorted_array = sorted(match_array, key=lambda k: k['match_score'])
    sorted_array = list(reversed(sorted_array))
    final_matches = sorted_array[0:5]
    return match_array

mentor_one = {
    "Name": "Jill",
    "Bio": "tset",
    "Experience": 8,
    "Country": "US",
    "TZ": "east",
    "Phone": "859-200",
    "Language": "Chinese",
    "Platform": "Twitter",
    "Stage": "Arrival",
    "Expertise": "Housing"
    }

mentor_two = {
    "Name": "test",
    "Bio": "test",
    "Experience": 6,
    "Country": "west",
    "TZ": "859-200",
    "Phone": "859-200",
    "Language": "English",
    "Platform": "Snap",
    "Stage": "Arrival",
    "Expertise": "None",

    }

mentor_three = {
    "Name": "test",
    "Bio": "test",
    "Experience": "test",
    "Country": "test",
    "TZ": "test",
    "Phone": "test",
    "Language": "Test",
    "Platform": "test",
    "Stage": "test",
    "Expertise": "test"
    }

mentor_four = {
"Name": "test",
    "Bio": "test",
    "Experience": "test",
    "Country": "test",
    "TZ": "test",
    "Phone": "test",
    "Language": "Test",
    "Platform": "test",
    "Stage": "test",
    "Expertise": "test"

    }
mentor_five = {
        "Name": "test",
    "Bio": "test",
    "Experience": "test",
    "Country": "test",
    "TZ": "test",
    "Phone": "test",
    "Language": "Test",
    "Platform": "test",
    "Stage": "test",
    "Expertise": "test"

    }

test = [ mentor_one, mentor_two, mentor_three, mentor_four, mentor_five ]

matching(test)
