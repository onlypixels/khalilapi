## Setup
clone the project
Install MongoDB: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/

### Installations
* npm install

### Run
* npm run start

### Initialise
Initialise the stress service by calling the Reset Stress Level service (POST to /stress)

### Mongoose docs
http://mongoosejs.com/docs/api.html

### Service ideas:
* /passports
* /areas_of_supposed_expertise
* /pet_peeves
* /favorite_emerging_tech

### Anti-patterns to embrace:
* coMingling camel-case, snake_case, nocase, etc
* naming resources inconsistently, sometimes using singular vs plural (eg. /car vs. /cars)
* misuse HTTP verbs (GET that updates the database, etc)
* bad/confusing query parameters
* poor security
* misuse HTTP response codes
* make some services unnecessarily verbose and others unnecessarily chatty
* poor typing (numbers/booleans as strings)
* embed XML in a JSON response
* 3 value booleans or 0 = true
* obscure headers