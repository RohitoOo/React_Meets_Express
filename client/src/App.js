import React, { Component } from 'react';
import logo from './logo.svg';
// import logo from './swiggy.svg';
import './App.css';
import Restaurants from './components/restaurants/restaurants';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Swiggy</h1>
        </header>
        <Restaurants/>
      </div>
    );
  }
}

export default App;
