#!/usr/bin/python

#Takes in mentee preference information and compares them to the database of mentors
def matching (mentors, mentee):
    match_array = [] #initialize match array
    #Create Dictionary with mentee information from the JSON
    mentee_info = {
        "Experience": mentee['experience'],
        "Country": mentee['country'],
        "timezone": mentee['timezone'],
        "Language": mentee['language'],
        "Experience-Weight": mentee['experienceWeight'],
        "Country-Weight": mentee['countryWeight'],
        "timezone-Weight": mentee['timezoneWeight'],
        "Language-Weight": mentee['languageWeight']
    }

    #For each mentor in the table
    for mentor in mentors:
        #Create temp dictionary for the mentor
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

        #For each key in the mentor dictionary
        for key in mentor_info:
            #If the key also exists in the mentee preference dictionary
            if key in mentee_info:
                #If the preference matches the mentor information
                if(mentor_info[key] == mentee_info[key]):
                    #Increment the match score by the assigned weight
                     mentor_info["match_score"] = mentor_info["match_score"] + mentee_info[key + '-Weight']


        match_array.append(mentor_info) #append mentor to the mentors array

    sorted_array = sorted(match_array, key=lambda k: k['match_score']) #sort the array by match score
    sorted_array = list(reversed(sorted_array)) #Reverse the array
    final_matches = sorted_array[0:5] #Capture top 5 matches

    return final_matches
