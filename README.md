# HR-Web

### Our API helps companies hire developers tailored to a specific need.

The core of this API is to drive consulting companies throughout all the process that a job offer require, helps find the best candidates, skills that best match with what you are looking for, split the responsibilities with roles to be more efficient.

The API is made up of 4 different types of users:

    Admin
    Manager
    Recruiter
    Candidates
    
Our main idea:
___________________________________________________
   - Consulting (overview): 
   
      1.- The client has a need that he transmit to us through the API. 
      
      2.- The manager gets in touch with that client to learn more about their needs and post that job offer. 
      
      3.- The recruiter is in charge of getting potential candidates to report them to the manager. 
      
      4.- The manager filters the list that the recruiter has given him and schedules interviews with the possible candidates. 
      
      5.- The manager offers the client those candidates that best suit that profile (need).
___________________________________________________
   - Admin 
       - 1.- Can create/delete/modify all users accounts. 
       - 2.- Can create/delete skills/nationalities/languages/categories.
       - 3.- Can create/delete/modify job offer.

   - Manager: 
       - 1.- Add/modify/delete/see job offers.
       - 2.- See who apply to the job offer.
       - 3.- Reject/Interview candidate from state of requisition. 
       - 4.- ???You can move a candidate from one job offer to another???

   - Recruiter: 
       - 1.- See the job offers created.
       - 2.- You can see all the candidates who have applied to a job offer.
       - 3.- ???You can move a candidate from one job offer to another???

   - Candidate: 
       - 1.- Can create an account. 
       - 2-. Can update the account details.
       - 3-. Can add experiences to his profile
       - 4.- Can see the job offers that have been published. 
       - 5.- Can apply to job offers. 
       - 6.- Can see the offers to which he have applied.

# API Endpoints

All API Request must be prepended with /api

The Authentication flow for the application is:

### Authentication Endpoints

METHOD | ENDPOINT         | TOKEN | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|--------------------------|-------------------------------------------------|--------------------
POST   | /auth/signup     | -     | User Signup              | name, surname, email, phone, password           | token
POST   | /auth/login      | -     | User Login               | email, password                                 | token

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
DELETE | /users/:userId   | YES   |  Admin  | Deletes user account     | password                                                        | User deletion confirmation
PUT    | /users/:userId   | YES   |  Admin  | Update profile           | email, name, phone, password ( candidate: + skills, experience) | Updated user data



### Profile Endpoints

METHOD | ENDPOINT         | TOKEN | ROLE      | DESCRIPTION              | POST PARAMS                                      | RETURNS
-------|------------------|-------|-----------|--------------------------|--------------------------------------------------|--------------------
GET    | user/profile     | YES   | All       | View own profile         | -                                                | name, surname, email, phone ( candidate: + skills, experience)
PUT    | user/profile     | YES   | Candidate | Update profile           | email, name, phone, skills, experience, password | Updated user data
DELETE | user/profile     | YES   | Candidate | Deletes user account     | password                                         | User deletion confirmation

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
### Candidate Endpoints

METHOD | ENDPOINT                 | TOKEN | ROLE                  | DESCRIPTION                  | PARAMS               | RETURNS
-------|--------------------------|-------|-----------------------|------------------------------|----------------------|-----------------
GET    | users/candidates         |  YES  | Manager, Recruiter    | Get a list of all candidates | query: search string | List of matching names, surnames and ids
GET    | users/candidates/:userId |  YES  | Manager, Recruiter    | Get candidate profile        | -                    | name, surname, email, phone, skills, expereince, requisitions
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


### JobOffer Endpoints

METHOD | ENDPOINT                         | TOKEN | ROLE          |  DESCRIPTION        | PARAMS                                          | RETURNS
-------|----------------------------------|-------|---------------|---------------------|-------------------------------------------------|--------------------
POST   | /job-offer                       | YES   | Admin/Manager | Post a job offer    | tittle, postDate, company, description, skills  | Updated post offer
GET    | /job-offer                       | NO    | All users     | Get all jobs offers | query: search string                            | Lits of matching tittle, company, postDate and ids
GET    | /job-offer/:jobId                | NO    | All users     | Get full job offer  | -                                               | tittle, postDate, company, description, skills 
POST   | /job-offer/:jobId/requisitions   | YES   | Candidate     | Apply candidate ID  | -                                               | Requisiton

### Requisition Endpoints

### ¿Ola ke ase?
