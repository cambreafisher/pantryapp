
/************ Setup ************/
//connecting to express
const express = require("express");
const app = express();

//setting up the port
const port = process.env.PORT || 5000;

//connecting to database
const connectionString = process.env.DATABASE_URL || "postgres://owkdcdmkgyxzjs:89ea45abfa9d3f51c937e4461ff9ebd0dc250dc688046de92a3a471d8dab27e2@ec2-54-197-232-203.compute-1.amazonaws.com:5432/d289j9dirc8o7t?ssl=true";
const { Pool } = require('pg');
const pool = new Pool({connectionString: connectionString});

//idk
app.use(express.static('public'));
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

//set up the views
app.set("views", "views");
app.set("view engine", "ejs");

//set up controllers
const controller = require('./controllers/foodController.js');

/*************** Endpoints */
//all the food in the pantry
app.get('/pantry', controller.getAllFood);

//get - all the food for a specific user

//get - all the food in a shopping list

//get - all the lists

//get - all the food in a specific list

//get - all the food that has expired

//get - all the food that will expire in the next week


//get - search for a specific food

//post - adding a food item to the pantry

//post - creating a list

//post - adding a food item to a specific list

app.listen(port, () => {
    console.log(`Listening on ${port}`);
});