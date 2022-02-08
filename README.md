# HR-api

## API Endpoints

All API Request must be prepended with /api

Our API helps companies hire developers tailored to a specific need.

The API is made up of 4 different types of users:

- Company/Client
-manager
- Recruiter
- Candidates

In addition, there would be an administrator, his main function would be to register/unregister the account of the Managers and Recruiters.

Consulting (overview):
1.- The client has a need that he "can" transmit to us through the API.
2.- The manager gets in touch with that client to learn more about their needs and post that job offer.
3.- The recruiter is in charge of getting potential candidates to report them to the manager.
4.- The manager filters the list that the recruiter has given him and schedules interviews with the possible candidates.
5.- The manager offers the client those candidates that best suit that profile (need).


Manager:
1.- Add/modify/delete job offers.
2.- Assess the candidate's abilities (Hard skills and level)
3.- Reject/add candidates to job offers.
4.- You can move a candidate from one job offer to another.

Recruiter:
1.- See the job offers created by your Manager.
2.- You can see all the candidates who have applied to a job offer.
3.- Reject/add candidates to job offers.





Candidate:
1.- You can create an account.
two-. You can update the account details.
3.- You can see the job offers that have been published.
4.- You can apply to job offers.
5.- You can see the offers to which you have applied.

          Client
1.-You can register.
2.-You can assess the developer based on the performance of the work done.


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

¿Ola ke ase?
