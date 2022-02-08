# HR-api

## API Endpoints

All API Request must be prepended with /api

## Our API helps companies hire developers tailored to a specific need.

### The API is made up of 5 different types of users:

    Admin
    Manager
    Recruiter
    Candidates
    Client 
    
Consulting (overview): 1.- The client has a need that he "can" transmit to us through the API. 2.- The manager gets in touch with that client to learn more about their needs and post that job offer. 3.- The recruiter is in charge of getting potential candidates to report them to the manager. 4.- The manager filters the list that the recruiter has given him and schedules interviews with the possible candidates. 5.- The manager offers the client those candidates that best suit that profile (need).

Admin 1.- Can create/delete/modify all users accounts. 2.- Can create/delete/modify skills 3.- Can create/delete/modify job offer

Manager: 1.- Add/modify/delete/see job offers and requisitions. 2.- Assess the candidate's abilities (Hard skills and level) 3.- Reject/add candidates to job offers. 4.- You can move a candidate from one job offer to another.

Recruiter: 1.- See the job offers created by your Manager. 2.- You can see all the candidates who have applied to a job offer. 3.- Reject/add candidates to job offers.

Candidate: 1.- He or she can create an account. 2-. YHe or she update the account details. 3.- He or she see the job offers that have been published. 4.- He or she apply to job offers. 5.- He or she can see the offers to which you have applied.

Customer 1.-You can register. 2.-You can assess the developer based on the performance of the work done.



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
