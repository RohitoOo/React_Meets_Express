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
        return   <li>  <img src={require('./dish3.jpg')} />

          <img src={require('./dish4.jpg')} />

 {restaurant.restaurantId} <br/> {restaurant.restaurantName} <br/> {restaurant.restaurantPhoneNumber}
<img  src={require('./dish1.jpg')} />
<img src={require('./dish2.jpg')} />
 </li>
        }) }
      </ul>
      </div>
    );
  }
}

export default Restaurants;
