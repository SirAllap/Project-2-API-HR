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


### Profile Endpoints

METHOD | ENDPOINT         | TOKEN | ROLE              | DESCRIPTION              | POST PARAMS                   | RETURNS
-------|------------------|-------|-------------------|--------------------------|-------------------------------|--------------------
GET    | /profile         | YES   | Manager/Recruiter | View own profile         | -                             | name, surname, email, phone
PUT    | /profile         | YES   |       Admin       | Update profile           | email, name, phone, password  | Updated user data
DELETE | /profile         | YES   |       Admin       | Deletes user account     | password                      | User deletion confirmation


### Profile Endpoints

METHOD | ENDPOINT         | TOKEN | ROLE      | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|-----------|--------------------------|-------------------------------------------------|--------------------
GET    | /profile         | YES   | Candidate | View own profile         | -                                               | name, surname, email, phone, skills, experience
PUT    | /profile         | YES   | Candidate | Update profile           | email, name, phone, skills, experience, password| Updated user data
DELETE | /profile         | YES   | Candidate | Deletes user account     | password                                        | User deletion confirmation


### Candidate Endpoints

METHOD | ENDPOINT            | TOKEN | ROLE                  | DESCRIPTION                  | PARAMS               | RETURNS
-------|---------------------|-------|-----------------------|------------------------------|----------------------|-----------------
GET    | /candidates         |  YES  | Manager, Recruiter    | Get a list of all candidates | query: search string | List of matching names, surnames and ids
GET    | /candidates/:userId |  YES  | Manager, Recruiter    | Get candidate profile        | userId               | name, surname, email, phone, skills, expereince, requisitions
 

### JobOffer Endpoints

METHOD | ENDPOINT           | TOKEN | ROLE          |  DESCRIPTION        | PARAMS                                          | RETURNS
-------|--------------------|-------|---------------|---------------------|-------------------------------------------------|--------------------
POST   | /JobOffer          | YES   | Admin/Manager | Post a job offer    | tittle, postDate, company, description, skills  | Updated post offer
GET    | /JobOffer          | NO    | All users     | Get all jobs offers | query: search string                            | Lits of matching tittle, company, postDate and ids
GET    | /JobOffer/:jobId   | NO    | All users     | Get full job offer  | jobId                                           | tittle, postDate, company, description, skills 
POST   | /JobOffer/apply    | YES   | Candidate     | Apply candidate ID  | ??????????????                                  | ?????????????



### ¿Ola ke ase?
