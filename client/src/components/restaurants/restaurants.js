import React, {Component} from 'react';
import './restaurants.css';
import { Jumbotron } from 'react-bootstrap';
import Menu from '../Menu/Menu'


class Restaurants extends Component {

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

    fetch('/restaurants').then(res => res.json()).then(restaurants => this.setState({restaurants},
      () => console.log("Restaurants are being fetched from Express", restaurants)))
  }

  render() {
    return (<div >
      <br/>
      <h1>List Of Available Restaurants</h1>
      <br/>
        {
          this.state.restaurants.map((restaurant) => {
            return <Jumbotron>
              <ul>
              <li>
              <img alt="dish" src={restaurant.restaurantImage}/>
              <br/> &nbsp; {restaurant.restaurantName} &nbsp;
                {restaurant.restaurantPhoneNumber}
                <Menu restaurants = {restaurant}/>
            </li>
            </ul>
            </Jumbotron>
          })
        }
    </div>);
  }
}

export default Restaurants;
