# HR-api

## API Endpoints

All API Request must be prepended with /api

## Our API helps companies hire developers tailored to a specific need.

The API is made up of 5 different types of users:

    Admin
    Manager
    Recruiter
    Candidates
    Client 
    
   - Consulting (overview): 
      1.- The client has a need that he "can" transmit to us through the API. 
      2.- The manager gets in touch with that client to learn more about their needs and post that job offer. 
      3.- The recruiter is in charge of getting potential candidates to report them to the manager. 
      4.- The manager filters the list that the recruiter has given him and schedules interviews with the possible candidates. 
      5.- The manager offers the client those candidates that best suit that profile (need).

   - Admin 
       - 1.- Can create/delete/modify all users accounts. 
       - 2.- Can create/delete skills/nationalities/languages/categories
       - 3.- Can create/delete/modify job offer

   - Manager: 
       - 1.- Add/modify/delete/see job offers and requisitions. 
       - 2.- Assess the candidate's abilities (Hard skills and level) 
       - 3.- Reject/add candidates to job offers. 
       - 4.- You can move a candidate from one job offer to another.

   - Recruiter: 
       - 1.- See the job offers created.
       - 2.- You can see all the candidates who have applied to a job offer.
       - 3.- Reject/add candidates to job offers.

   - Candidate: 
       - 1.- He or she can create an account. 
       - 2-. He or she update the account details. 
       - 3.- He or she see the job offers that have been published. 
       - 4.- He or she apply to job offers. 
       - 5.- He or she can see the offers to which you have applied.

   - Customer 
       - 1.-You can register. 
       - 2.-You can assess the developer based on the performance of the work done.



The Authentication flow for the application is:

### Admin Endpoints

METHOD | ENDPOINT                         | TOKEN | ROLE    | DESCRIPTION                | POST PARAMS    | RETURNS
-------|----------------------------------|-------|---------|----------------------------|----------------|---------
POST   | /admin/skills                    | YES   |  Admin  | Add skills to DB           | skills         | Skill created
DELETE | /admin/skills/:skillId           | YES   |  Admin  | Delete skills form DB      | skills         | Skill deleted
POST   | /admin/language                  | YES   |  Admin  | Add language to DB         | laguage        | Laguage created
DELETE | /admin/language/:languageId      | YES   |  Admin  | Delete language form DB    | laguage        | Laguage deleted
POST   | /admin/nationality               | YES   |  Admin  | Add nationality to DB      | nationality    | Nationalty created
DELETE | /admin/nationality/:nationalityId| YES   |  Admin  | Delete nationality form DB | nationality    | Nationalty deleted
POST   | /admin/category                  | YES   |  Admin  | Add category to DB         | category       | Category created
DELETE | /admin/category/:categoryId      | YES   |  Admin  | Delete category form DB    | category       | Category deleted


### Users Endpoints
                  
METHOD | ENDPOINT         | TOKEN | ROLE    | DESCRIPTION              | POST PARAMS                                                     | RETURNS
-------|------------------|-------|---------|--------------------------|-----------------------------------------------------------------|--------------------
POST   | /users           | YES   |  Admin  | Create user account      | name, surname, email, phone, password                           | User created comfirmation
GET    | /users           | YES   |  Admin  | Get all users accounts   | name, surname, email, phone, password                           | User created comfirmation
DELETE | /users/:userId   | YES   |  Admin  | Deletes user account     | password                                                        | User deletion confirmation
PUT    | /users/:userId   | YES   |  Admin  | Update profile           | email, name, phone, password ( candidate: + skills, experience) | Updated user data


### Authentication Endpoints

METHOD | ENDPOINT         | TOKEN | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|--------------------------|-------------------------------------------------|--------------------
POST   | /auth/signup     | -     | User Signup              | name, surname, email, phone, password           | token
POST   | /auth/login      | -     | User Login               | email, password                                 | token


### Profile Endpoints

METHOD | ENDPOINT         | TOKEN | ROLE      | DESCRIPTION              | POST PARAMS                                      | RETURNS
-------|------------------|-------|-----------|--------------------------|--------------------------------------------------|--------------------
GET    | user/profile     | YES   | All       | View own profile         | -                                                | name, surname, email, phone ( candidate: + skills, experience)
PUT    | user/profile     | YES   | Candidate | Update profile           | email, name, phone, skills, experience, password | Updated user data
DELETE | user/profile     | YES   | Candidate | Deletes user account     | password                                         | User deletion confirmation


### Candidate Endpoints

METHOD | ENDPOINT                 | TOKEN | ROLE                  | DESCRIPTION                  | PARAMS               | RETURNS
-------|--------------------------|-------|-----------------------|------------------------------|----------------------|-----------------
GET    | users/candidates         |  YES  | Manager, Recruiter    | Get a list of all candidates | query: search string | List of matching names, surnames and ids
GET    | users/candidates/:userId |  YES  | Manager, Recruiter    | Get candidate profile        | -                    | name, surname, email, phone, skills, expereince, requisitions


### JobOffer Endpoints

METHOD | ENDPOINT                         | TOKEN | ROLE          |  DESCRIPTION        | PARAMS                                          | RETURNS
-------|----------------------------------|-------|---------------|---------------------|-------------------------------------------------|--------------------
POST   | /job-offer                       | YES   | Admin/Manager | Post a job offer    | tittle, postDate, company, description, skills  | Updated post offer
GET    | /job-offer                       | NO    | All users     | Get all jobs offers | query: search string                            | Lits of matching tittle, company, postDate and ids
GET    | /job-offer/:jobId                | NO    | All users     | Get full job offer  | -                                               | tittle, postDate, company, description, skills 
POST   | /job-offer/:jobId/requisitions   | YES   | Candidate     | Apply candidate ID  | -                                               | Requisiton


### ¿Ola ke ase?
