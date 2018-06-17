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
        {this.props.beerArray.map((item, index) => <img key={index} src={item.image_url} alt={item.beer} />)}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
