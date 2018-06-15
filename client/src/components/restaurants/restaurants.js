import React, { Component } from 'react';
import './restaurants.css';

class Restaurants extends Component {

constructor(){
//super() - As this is being embeded into a parent Component
  super();
  this.state = {
    restaurants : []
  }
}
//Used Proxy in Package.json
//fetch(http://localhost:5000/restaurants)

componentDidMount(){

   fetch('/restaurants')
  .then(res => res.json())
  .then(restaurants => this.setState({restaurants}, () =>
    console.log("Restaurants are being fetched from Express" , restaurants)
  ))
}

  render() {
    return (
      <div >
        <h1>List Of Available Restaurants</h1>
        <ul>
      {this.state.restaurants.map( (restaurant) => {
        return   <li> {restaurant.restaurantId}  {restaurant.restaurantName} {restaurant.restaurantPhoneNumber} </li>
        }) }
      </ul>
      </div>
    );
  }
}

export default Restaurants;
