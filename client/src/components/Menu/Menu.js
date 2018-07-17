import React, { Component } from 'react';

class Menu extends Component {


  constructor() {
    //super() - As this is being embeded into a parent Component
    super();
    this.state = {
      restaurants: []
    }
  }
  //Used Proxy in Package.json
  //fetch(http://localhost:5000/restaurants)

  componentDidMount() {

    fetch('/restaurants').then(res => res.json()).then(restaurants => this.setState({
      restaurants
    }, () => console.log("Restaurants are being fetched from Express", restaurants)))
  }



  render() {
    return (
      <div>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 3</li>
        </ul>
      </div>
    );
  }

}

export default Menu;
