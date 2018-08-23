import React, { Component } from 'react';
import img from './images/dish2.jpg'



class Menu extends Component {
  render() {

const {restaurants} = this.props
    return (
      <div>
        <ul>
          <li>{this.props.restaurants.item1} &nbsp;
            <img alt="dish" src={img}></img>  &nbsp;
            {restaurants.price}
          </li>
        </ul>
      </div>
    );
  }

}

export default Menu;
