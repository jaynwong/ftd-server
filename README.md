This folder contains the web server using Node.js and Express to process the HTTP requests and responses.

Please run <i>npm install</i> to install all the dependencies in the <b>server</b> folder.

To run the server, use the commands:

 ***please note for mac systems all of these commands do the same and runs the server with the testing database stored in Atlas (cloud), so you can just use `npm start`*** if you want to test the production deplopyment locally change the default "testing" environment in line 6 of conn.js to "production".
 
<ul>
    <li><i>npm run start-dev</i> to run the server with your local database</li>
    <li><i>npm run start-test</i> to run the server with the testing database stored in Atlas (cloud)</li>
    <li><i>npm run start-prod</i> to run the server to test the production deployment locally</li>
    <li><i>npm start</i> what the deployment (heroku) uses to run the production</li>
    <li><i>npm run nodemon-dev</i> to use the nodemon library to automatically restart your app once changes have been made (works for local development)</li>
</ul>

Please also put the .env file into the server folder, in the same directory with the <i>server.js</i> file. The .env file should be in your email inbox.

***Deployment to heroku:***

Set up your Heroku CLI (command line interface) to prepare for deployment (Only needs to be done ***once***):
Sign up for a Heroku account with your uni email (that has been added as a collaborator to the FoodToDo Heroku app)
on a mac terminal: brew tap heroku/brew && brew install heroku (for windows and linux, refer to the instructions here: https://devcenter.heroku.com/articles/heroku-cli#download-and-install)
1. heroku login
2. heroku git:remote -a ftd-server

Deploy the main branch to Heroku (make sure you are on the main branch):
1. git checkout main 
2. git pull (to pull the latest changes from main)
3. git push heroku
