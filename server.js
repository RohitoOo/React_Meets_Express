const express = require('express')
const mongoose = require('mongoose')
const config = require('./config/database')


// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";


// var restaurants;
//
// MongoClient.connect(url, { useNewUrlParser: true },function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("restaurantsDatabase");
//   dbo.collection("restaurants").findOne({}, function(err, restaurants) {
//     if (err) throw err;
//      // res.json(restaurants)
//
//   });
// });



mongoose.connect(config.database , { useNewUrlParser: true })
let db = mongoose.connection;

// Check connection

db.once('open', function() {
  console.log("Connected to MongoDB")
});

// Check for DB errors

db.on('error', function(err) {
  console.log("err")
});



//Init App
const app = express();

var Schema = new mongoose.Schema({
  _id : {type : String},
    restaurantId : {type : String},
    restaurantName : {type : String},
    restaurantPhoneNumber : {type : String},
    restaurantPhoneNumber : {type: String},
    restaurantImage : {type : String},
    item1 : {type : String},
    price : {type : String},
    })


var Restaurant = mongoose.model('Restaurant' , Schema)

app.get('/restaurants', (req, res) => {


console.log('Express Server Is Running')

  Restaurant.find({}, (err, restaurants) => {

    if(err) res.json(err);
    else res.json(restaurants)
  })

})

app.get('/' , (req,res) => {

  res.send('Express Server Is Running')
})


  // This info will be pull from the mongo database using mongoose query


  // const restaurants = [
  //   {
  //     "restaurantId": "1.",
  //     "restaurantName": "Burger King",
  //     "restaurantPhoneNumber": "998923976",
  //     "restaurantImage": "https://image.ibb.co/mFYRKJ/burger_King.png",
  //     "item1" : "Pasta",
  //     "price" : "$10"
  //   }, {
  //     "restaurantId": "2.",
  //     "restaurantName": "KFC",
  //     "restaurantPhoneNumber": "998923976",
  //     "restaurantImage": "https://image.ibb.co/mVD46y/kfc.png",
  //     "item1" : "Pasta",
  //     "price" : "$10"
  //   }, {
  //     "restaurantId": "3.",
  //     "restaurantName": "McDonalds",
  //     "restaurantPhoneNumber": "998923976",
  //     "restaurantImage": "https://image.ibb.co/e9Riid/mcdonalds.png",
  //     "item1" : "Pasta",
  //     "price" : "$10"
  //   }, {
  //     "restaurantId": "4.",
  //     "restaurantName": "Burger King",
  //     "restaurantPhoneNumber": "998923976"
  //
  //   }, {
  //     "restaurantId": "5.",
  //     "restaurantName": "KFC",
  //     "restaurantPhoneNumber": "998923976"
  //   }, {
  //     "restaurantId": "6.",
  //     "restaurantName": "McDonalds",
  //     "restaurantPhoneNumber": "998923976"
  //   }, {
  //     "restaurantId": "7.",
  //     "restaurantName": "Burger King",
  //     "restaurantPhoneNumber": "998923976"
  //
  //   }, {
  //     "restaurantId": "8.",
  //     "restaurantName": "KFC",
  //     "restaurantPhoneNumber": "998923976"
  //   }, {
  //     "restaurantId": "9.",
  //     "restaurantName": "McDonalds",
  //     "restaurantPhoneNumber": "998923976"
  //   }
  // ]



// })

app.listen(5000, (req, res) => {
  console.log("Express Server Running on Port 5000")
})
