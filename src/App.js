import React, { Component } from 'react';
import {connect} from "react-redux";
import logo from './logo.svg';
import './App.css';
import {fetchBeer} from "./actions/fetchBeer.action";

const mapDispatchToProps = dispatch => {
  return {
    fetchBeer: () => dispatch(fetchBeer())
  };
};

class App extends Component {

  componentDidMount(){
    this.props.fetchBeer();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default connect(null,mapDispatchToProps)(App);
