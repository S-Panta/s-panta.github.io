- User cannot create their own database ( nor add their own data)
- user can save their progress ( requires auth )
- List of all words ( with locked  feature if another is not completed:levelling system )
- Random generator ( word for the day )
- Flash card having the word with their meaning and example sentence that are theological in nature
- in the future, join philosophical stuff too. 
- Data are to be collected manually, not  automation and curated and designed manually
- Option to select, they know the word, then add that word to their known list, they are confused, add
    that to unknown list and repeat that whole list with each status marked ( either known or unknown)
-  Leitner system:to design card
- 
## to-do
- UI and API test
- Unit Test
- Setup Github Action and Drone CI
- Have the server run in docker (containerisation/Scalability)
- Oath2 service
- Focus on using battle-tested authentication frameworks 
such as passport.js and it's integration with your server framework. (Authentication)
- Allow for admin users who can login to see a list of users (Authorisation)
- Include server-side sessions to store a user's role (redis/NoSQL + Scalability)
- Include logging to display events such as users logging in/failed logins
- Include a /healthcheck route which checks for a valid CXN to SQL and Redis/NoSQL (also include job-queue length)
- Build another service which runs in a container and subscribe it to a job-queue (bee-queue?)
