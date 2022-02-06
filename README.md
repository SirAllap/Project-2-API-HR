# HR-api

## API Endpoints

All API Request must be prepended with /api


### Authentication Endpoints

The Authentication flow for the application is:

METHOD | ENDPOINT         | TOKEN | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|--------------------------|-------------------------------------------------|--------------------
POST   | /auth/signup     | -     | User Signup              | name, surname, email, phone, password           | token
POST   | /auth/login      | -     | User Login               | email, password                                 | token
POST   | /auth/check      | YES   | Auth Token check         | -                                               |


### Manager Profile Endpoints

METHOD | ENDPOINT         | TOKEN | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|--------------------------|-------------------------------------------------|--------------------
GET    | /profile         | YES   | View own profile         | -                                               | name, surname, email, phone


### Recruiter Profile Endpoints

METHOD | ENDPOINT         | TOKEN | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|--------------------------|-------------------------------------------------|--------------------
GET    | /profile         | YES   | View own profile.        | -                                               | name, surname, email, phone


### Cadidate Profile Endpoints

METHOD | ENDPOINT         | TOKEN | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|--------------------------|-------------------------------------------------|--------------------
GET    | /profile         | YES   | View own profile.        | -                                               | name, surname, email, phone, skills, experience
PUT    | /profile         | YES   | Update own user profile  | email, name, phone, skills, experience, password| Updated user data
DELETE | /profile         | YES   | Deletes own user account | password                                        | User deletion confirmation


### Manager Endpoints

METHOD | ENDPOINT           | TOKEN | DESCRIPTION              | PARAMS                                          | RETURNS
-------|--------------------|-------|--------------------------|-------------------------------------------------|--------------------
GET    | /candidates        | YES   | Get a list of candidates | query: search string                            | List of matching names, surnames and ids
GET    | /candidates/:canId | YES   | Get candidate profile    | canId                                           | name, surname, email, phone, skills, expereince


### Recruiter Endpoints

METHOD | ENDPOINT         | TOKEN | DESCRIPTION              | PARAMS                                          | RETURNS
-------|------------------|-------|--------------------------|-------------------------------------------------|--------------------
GET    | /candidates      | YES   | Get a list of users      | query: search string                            | List of matching usernames and ids
GET    | /users/:userid   | YES   | Get user profile         | userid                                          | username, name, email, posts


### Cadidate Endpoints

METHOD | ENDPOINT         | TOKEN | DESCRIPTION              | PARAMS                                          | RETURNS
-------|------------------|-------|--------------------------|-------------------------------------------------|--------------------
GET    | /candidates      | YES   | Get a list of users      | query: search string                            | List of matching usernames and ids
GET    | /users/:userid   | YES   | Get user profile         | userid                                          | username, name, email, posts
.....
