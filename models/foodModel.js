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
        }
    });
}

function getExpiringFood(callback) {
    console.log('getting the expiring food');
    const id = 1;
    var currentDate = new Date();
    currentDate.setDate(currentDate.getDate()+7);
    console.log(currentDate);
   
    pool.query('SELECT food_name, expiration_date from FOOD WHERE user_id = $1 AND expiration_date <= $2', [id, currentDate], (err, result) => {
        if (err) {
            callback(err, null);
        } else {
            console.log('got stuff from database');
            callback(null, result.rows);
        }
    });
}

function getShopping(callback) {
    console.log('getting shopping list');
    const id = 1;
    
    pool.query('SELECT food_name, quantity from SHOPPING WHERE user_id = $1', [id], (err, result) => {
        if (err) {
            callback(err, null);
        } else {
            console.log('got shopping from database');
            callback(null, result.rows);
        }
    });
}

function addFood(foodname, expires, callback) {

    console.log(foodname);
    console.log(expires);
    console.log('inserting food');
    const id = 1;

    pool.query('INSERT INTO FOOD(food_name, expiration_date, user_id) VALUES($1, $2, $3)', [foodname, expires, id], (err, result) => {
        if (err) {
            callback(err, null);
        } else {
            console.log('inserting food');
            callback(null, result.rows);
        }
    })
}

module.exports = {
    getAllFood: getAllFood,
    getExpiringFood: getExpiringFood,
    getShopping: getShopping,
    addFood: addFood
}