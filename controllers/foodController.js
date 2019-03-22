//controller takes data from model and handles user

//connect with model
const model = require("../models/foodModel.js");

function getAllFood(request, response) {

    model.getAllFood(function(err, food) {
        if(err) {
            const data = {
                success: false, 
                message: err
            };
            response.status(500).json(data);
        } else {
            const data = {
                food: food
            };
            response.json(data);
        }
    });
}

module.exports = {
    getAllFood: getAllFood
}