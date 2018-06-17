import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';
import { fetchBeer } from "./actions/fetchBeer.action";
import AppBar from "./components/appBar.component";
import SingleLineGridList from "./components/singleLineGridList.component";


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

  showThreeLimitedBeers() {
    let arrayToAnalyse = [...this.props.beerArray]
    if (arrayToAnalyse.length !== 0) {
      let arrayToDisplay = arrayToAnalyse
        .sort(function (a, b) {
          return a.quantity_in_stock - b.quantity_in_stock;
        })
        .slice(0, 3);
      console.log('arrayToDisplay: ', arrayToDisplay)
      return arrayToDisplay.map((item, index) => <img key={index} src={item.image_url} alt={item.beer} />)
    }
  }

  render() {


    return (
      <div className="App">
      <AppBar/>
      <div className="App-spacer"/>
      <SingleLineGridList/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {this.showThreeLimitedBeers()}
        {this.props.beerArray.map((item, index) => <img key={index} src={item.image_url} alt={item.beer} />)}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
