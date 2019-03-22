//handle and connect to database
//connecting to database
const connectionString = process.env.DATABASE_URL || "postgres://owkdcdmkgyxzjs:89ea45abfa9d3f51c937e4461ff9ebd0dc250dc688046de92a3a471d8dab27e2@ec2-54-197-232-203.compute-1.amazonaws.com:5432/d289j9dirc8o7t?ssl=true";
const { Pool } = require('pg');
const pool = new Pool({connectionString: connectionString});


function getAllFood(callback) {
    console.log("viewing the food in your pantry");
    const id = 1;
    pool.query('SELECT food_name, expiration_date from FOOD WHERE user_id = $1', [id], (err, result) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, result.rows);
            /*
            const food = result.rows;
            //this just prints out the endpoint
            response.json(result.rows);
        */
        
            //console.log(food);

        //console.log(params);
        //what we could do is just do the json endpoint and then have another 
        //another file that connects to said endpoint
        //is there a way to both create the endpoint and call the function so it will display the results?

        //response.render("foodresult", result);
        
        }
    });
}

module.exports = {
    getAllFood: getAllFood
}