import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';
import { fetchBeer } from "./actions/fetchBeer.action";
import AppBar from "./components/appBar.component";
import SingleLineGridList from "./components/singleLineGridList.component";
import Card from "./components/card.component";



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

  showSelectedBeers() {
    let arrayToAnalyse = [...this.props.beerArray];
    if (arrayToAnalyse.length !== 0) {
      let arrayToDisplay = arrayToAnalyse
        .sort((a, b) => a.quantity_in_stock - b.quantity_in_stock)
        .filter(obj => obj.quantity_in_stock !== 0)
        .slice(0, 3);
      return <SingleLineGridList beerToDisplay={arrayToDisplay} />
    }
  }

  showCards() {
    let arrayToAnalyse = [...this.props.beerArray];
    if (arrayToAnalyse.length !== 0) {
      // return  this.props.beerArray.map((item, index) => <img key={index} src={item.image_url} alt={item.beer} />)
      return arrayToAnalyse
        .filter(obj => obj.quantity_in_stock !== 0)
        .map((item, index) =>
          <Card
            key={index}
            imageSrc={item.image_url}
            beer={item.beer}
            alcohol={item["alcohol_%"]}
            review={item["average_review_rating_0_to_5"]}
          />)
    }
  }

  render() {
    return (
      <div className="App">
        <AppBar />
        <div className="App-spacer" />
        <p className="App-intro">
          Limited availability beers below - Check them out!
        </p>
        {this.showSelectedBeers()}
        <p className="App-intro">
          Our broad range of booze for Her and Him - Now with a London flair!<br />Our competitors online struggle to catch up - give us a try ;)
        </p>
        <div className="card-wrapper">
          {this.showCards()}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
