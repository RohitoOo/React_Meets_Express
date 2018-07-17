const express = require('express')

const app = express();

app.get('/restaurants', (req, res) => {

  // This info will be pull from the mongo database using mongoose query
  const restaurants = [
    {
      "restaurantId": "1.",
      "restaurantName": "Burger King",
      "restaurantPhoneNumber": "998923976",
      "restaurantImage": "https://image.ibb.co/mFYRKJ/burger_King.png" 

    }, {
      "restaurantId": "2.",
      "restaurantName": "KFC",
      "restaurantPhoneNumber": "998923976"
    }, {
      "restaurantId": "3.",
      "restaurantName": "McDonalds",
      "restaurantPhoneNumber": "998923976"
    }, {
      "restaurantId": "4.",
      "restaurantName": "Burger King",
      "restaurantPhoneNumber": "998923976"

    }, {
      "restaurantId": "5.",
      "restaurantName": "KFC",
      "restaurantPhoneNumber": "998923976"
    }, {
      "restaurantId": "6.",
      "restaurantName": "McDonalds",
      "restaurantPhoneNumber": "998923976"
    }, {
      "restaurantId": "7.",
      "restaurantName": "Burger King",
      "restaurantPhoneNumber": "998923976"

    }, {
      "restaurantId": "8.",
      "restaurantName": "KFC",
      "restaurantPhoneNumber": "998923976"
    }, {
      "restaurantId": "9.",
      "restaurantName": "McDonalds",
      "restaurantPhoneNumber": "998923976"
    }
  ]

  res.json(restaurants)

})

app.listen(5000, (req, res) => {
  console.log("Express Server Running on Port 5000")
})
