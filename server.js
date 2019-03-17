
const express = require("express");
const app = express();
//setting up ports
const port = process.env.PORT || 5000;
//connecting to database
const connectionString = process.env.DATABASE_URL || "postgres://owkdcdmkgyxzjs:89ea45abfa9d3f51c937e4461ff9ebd0dc250dc688046de92a3a471d8dab27e2@ec2-54-197-232-203.compute-1.amazonaws.com:5432/d289j9dirc8o7t?ssl=true";
const { Pool } = require('pg');
const pool = new Pool({connectionString: connectionString});

app.use(express.static('public'));
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

app.set("views", "views");
app.set("view engine", "ejs");

app.get('/pantry', getFood);

app.listen(port, () => {
    console.log(`Listening on ${port}`);
});

/**************** */
function getFood(req, response) {
    console.log("viewing the food in your pantry");
    const id = 1;
    pool.query('SELECT food_name, expiration_date from FOOD WHERE user_id = $1', [id], (err, result) => {
        if (err) {
            throw err
        } else {
            const food = result.rows;
            //this just prints out the endpoint
            //response.json(food);
        
        console.log(food);

        response.render("foodresult", food);
        }
    });
    
}