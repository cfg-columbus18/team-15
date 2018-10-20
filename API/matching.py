#!/usr/bin/python
from apiBoilerplate import get_db
from apiBoilerplate import getMentorTable

def matching (mentee):
    db = get_db()
    mentors = getMentorTable(db)
    match_array = []
    mentee_info = {
        "Experience": mentee['experience'],
        "Country": mentee['country'],
        "TZ": mentees['timezone'],
        "Language": mentee['language'],
        "Experience-Weight": mentee['experienceWeight'],
        "Country-Weight": mentee['countryWeight'],
        "timezone-Weight": mentee['timezoneWeight'],
        "Language-Weight": mentee['languageWeight']
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
                     mentor_info["match_score"] = mentor_info["match_score"] + mentee[key + '-Weight']


        match_array.append(mentor_info)

    sorted_array = sorted(match_array, key=lambda k: k['match_score'])
    sorted_array = list(reversed(sorted_array))
    final_matches = { }
    for i in range(0, 5):
        final_matches[i] = sorted_array[i]
    return final_matches
