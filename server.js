const express = require('express')
const mongoose = require('mongoose')
const config = require('./config/database')


mongoose.connect(config.database , { useNewUrlParser: true })
let db = mongoose.connection;

// Check connection

db.once('open', function() {
  console.log("Connected to MongoDB")
});

// Check for DB errors

db.on('error', function(err) {
  console.log("DB err")
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


app.listen(5000, (req, res) => {
  console.log("Express Server Running on Port 5000")
})
