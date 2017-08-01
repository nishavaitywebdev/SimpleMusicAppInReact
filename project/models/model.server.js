/**
 * Created by nishavaity on 07/25/17.
 */
module.exports = function () {
    var mongoose = require("mongoose");
    // Connect to our mongo database
    mongoose.connect('mongodb://localhost/react-spotify');
    // mongoose.connect("mongodb://mongo:mongo@ec2-35-165-64-189.us-west-2.compute.amazonaws.com:27017/dummyDB");
    //console.log("Inside model server js");
    // var userModel = require("./user/user.model.server")();
    // var reviewModel = require("./review/review.model.server")();
    // var hotelModel = require("./hotel/hotel.model.server")();
    // var cityModel = require("./city/city.model.server")();
    // var model = {
    //     userModel:userModel,
    //     reviewModel:reviewModel,
    //     hotelModel:hotelModel,
    //     cityModel:cityModel
    //     // widgetModel:widgetModel
    // };
    // hotelModel.setModel(model);
    // reviewModel.setModel(model);
    // userModel.setModel(model);
    // cityModel.setModel(model);
    // return model;

};