import React, { Component } from 'react';
import img from './images/dish2.jpg'



class Menu extends Component {


  render() {
    return (
      <div>
        <ul>
          <li>{this.props.restaurants.item1} &nbsp;  <img src={img}></img>  &nbsp; {this.props.restaurants.price} </li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 3</li>
        </ul>
      </div>
    );
  }

}

export default Menu;
