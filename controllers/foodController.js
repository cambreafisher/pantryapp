//controller takes data from model and handles user

//connect with model
const model = require("../models/foodModel.js");

function getAllFood(request, response) {
    model.getAllFood(function(err, food) {
      response.json(food);
    });
}

function getExpiringFood(request, response) {
    
    model.getExpiringFood(function(err, food) {
        response.json(food);
    });
}

function getShopping(request, response) {
    model.getShopping(function(err, food) {
        response.json(food);
    });
}

function addFood(request, response) {
    var foodname = request.body.foodname;
    var expires = request.body.expires;

    model.addFood(foodname, expires, function(foodname, err, results) {
        response.json(results);
    });
}

module.exports = {
    getAllFood: getAllFood,
    getExpiringFood: getExpiringFood,
    getShopping: getShopping,
    addFood: addFood
}