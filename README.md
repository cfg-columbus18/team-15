# Team 15 CodeForGood

We designed a web application to allow for prospective mentees to match with mentors based on their preferences. When signing up for the service mentees will put in what attributes they want their mentor they have and rank how important it is to have those attributes. Our application will return a list of mentors sorted by how much they match the criteria along with information for how to contact them.

## Installation
### DB
You will need to install mysql on your machine. Use the files provided in ```db/``` to properly setup a schema for the database. If you change any values like ports or database name, make sure you reflect those changes in ```API/apiBoilerplate.py```

### API
You will need flask and python on your machine to run the API. First make installations:
```
pip install flask
pip install flask-cors
pip install mysql-connector-python
```
Then run:
```
FLASK_APP=apiBoilerplate.py flask run
```

### React
The react frontend was setup using create-react-app. To setup all you need to do is cd into the react folder then run:
```
yarn
yarn start
```
You should be able to access your application in the browser.
