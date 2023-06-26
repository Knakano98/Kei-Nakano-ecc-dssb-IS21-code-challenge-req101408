# Kei-Nakano-ecc-dssb-IS21-code-challenge-req101408

## Installation
Clone/Download the repo, and navigate to the `frontend` and `backend` directories to install dependencies with
```
npm install
```
## Usage
### First Usage
On first usage, run
```
python manage.py loaddata sample
```
in the backend directory to load the sample data from the `/backend/code_challenge/fixtures/sample.json` file.
### Backend
In the backend directory, run
```
python manage.py runserver 3000
```
to run the Django server on port 3000. All of the products should now be visible at http://localhost:3000/api/entries/.

### Frontend
In the frontend directory,  run
```
npm start -- --port 3001
```
to run the Frontend on port 3001.  The web app should now be visible on http://localhost:3001/.

## Documentation
Documentation can be accessed at
```
http://localhost:3000/swagger.json/ 	#To view in JSON format
http://localhost:3000/swagger.yaml/		#To view in YAML format
http://localhost:3000/swagger/			#To view with Swagger UI
http://localhost:3000/redoc/			#To view with Redoc
```
## Structure

Created with Django and React.
