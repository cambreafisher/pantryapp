
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

//the json and urlencoded are for post values
app.use(express.static('public'));
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

//set up the views
app.set("views", "views");
app.set("view engine", "ejs");

//set up controllers
const foodController = require('./controllers/foodController.js');

/*************** Endpoints */
//all the food in the pantry
app.get('/pantry', foodController.getAllFood);

//get - all the food for a specific user

//get - all the food in the shopping list
app.get('/shopping', foodController.getShopping);

//get - all the lists

//get - all the food in a specific list

//get - all the food that has expired

//get - all the food that will expire in the next week
app.get('/expiringFood', foodController.getExpiringFood);

//get - search for a specific food

//post - adding a food item to the pantry
app.post('/addFood', foodController.addFood);

//post - add item to the shopping


//post - removing a food item from the pantry
app.post('/removeFood', foodController.removeFood);

//post - removing a food item from the shopping
//app.post('/removeShopping', foodController.removeShopping);

//post - creating a list

//post - adding a food item to a specific list

app.listen(port, () => {
    console.log(`Listening on ${port}`);
});