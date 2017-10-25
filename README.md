# Friend Finder - using Node and Express
 Servers

### Overview

 This is a compatibility-based "FriendFinder" application. The application takes in results from  users' surveys, then compares their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

We use Express to handle routing. 

### Installation

The app is deployed on Heroku and can be accessed using the link:

[https://secret-island-67883.herokuapp.com/]

### Application Logic

1. The survey has 10 questions. Each answer is on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

2. The server.js file requires the basic npm packages: express, body-parser and path and initiates a server.

3. The htmlRoutes.js file includes two routes:

   - A GET Route '/survey' which displays the survey page.

   - A default, catch-all route that leads to home.html which displays      the home page.

4. The apiRoutes.js file contains two routes:

   - A GET route with the url /api/friends. This displays a JSON of all      possible friends.

   - A POST routes /api/friends. This handles incoming survey results      and the compatibility logic.

6. The application's data is saved inside of app/data/friends.js as an array of objects. Each of these objects follows the format below.

{
  "name":"Jack",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
} 



7. We determine the user's most compatible friend using the following logic:

   - Compare the difference between current user's scores against those      from other users, question by question. Add up the differences to      calculate the totalDifference.

     Example:
     
     User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]

     User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]

     Total Difference: 2 + 1 + 2 = 5

     We use the absolute value of the differences. 

    - The closest match will be the user with the least amount of       difference.


Once we find the current user's most compatible friend, the result is displayed as a modal pop-up.

The modal displays both the name and picture of the closest match.