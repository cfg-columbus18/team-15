#!/usr/bin/python
from apiBoilerplate import get_db
from apiBoilerplate import getMentorTable


db = get_db()
mentors = getMentorTable(db)

def matching (mentors):
    match_array = []
    mentee_info = {
        "Experience": 8,
        "Country": "CA",
        "TZ": "east",
        "Language": "english",
        "Platform": "twitter",
        "Stage": "Arrival",
        "Expertise": "Housing",
    }


    for mentor in mentors:
        mentor_info = {
            "Name": mentor[0],
            "Bio": mentor[10],
            "Experience": mentor[3],
            "Country": mentor[1],
            "TZ": mentor[2],
            "Phone": mentor[4],
            "Language": mentor[5],
            "Platform": mentor[6],
            "Stage": mentor[7],
            "Email": mentor[9],
            "Expertise": mentor[8],
            "match_score": 0
        }

        for key in mentor_info:
            if key in mentee_info:
                if(mentor_info[key] == mentee_info[key]):
                     mentor_info["match_score"] = mentor_info["match_score"] + 1


        match_array.append(mentor_info)

    sorted_array = sorted(match_array, key=lambda k: k['match_score'])
    sorted_array = list(reversed(sorted_array))
    final_matches = sorted_array[0:5]
    print (final_matches)
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

matching(mentors)
