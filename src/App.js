import React, { Component } from 'react';
import { connect } from "react-redux";
import logo from './logo.svg';
import './App.css';
import { fetchBeer } from "./actions/fetchBeer.action";

const mapDispatchToProps = dispatch => {
  return {
    fetchBeer: () => dispatch(fetchBeer())
  };
};

const mapStateToProps = state => {
  return { beerArray: state.beerArray };
};

class App extends Component {

  componentDidMount() {
    this.props.fetchBeer();
  }

  render() {

    console.log('this.props.beerArray: ', this.props.beerArray);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <img src={"//cdn.shopify.com/s/files/1/1035/1939/products/image_4361bf20-da35-4552-9c41-ea8d2d4349d2_1024x1024.jpg?v=1519390891"}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
