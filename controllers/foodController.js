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

module.exports = {
    getAllFood: getAllFood,
    getExpiringFood: getExpiringFood
}