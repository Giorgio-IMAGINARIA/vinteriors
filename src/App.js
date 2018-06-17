import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { connect } from "react-redux";
import './App.css';
import { fetchBeer } from "./actions/fetchBeer.action";
import AppBar from "./components/appBar.component";
import SingleLineGridList from "./components/singleLineGridList.component";
import Card from "./components/card.component";

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  }
});



const mapDispatchToProps = dispatch => {
  return {
    fetchBeer: () => dispatch(fetchBeer())
  };
};

const mapStateToProps = state => {
  return { beerArray: state.beerArray };
};

class App extends Component {

  state = {
    stock: 'des'
  };

  constructor(props) {
    super(props);
    this.props.fetchBeer();
  }

  showSelectedBeers = () => {
    let arrayToAnalyse = [...this.props.beerArray];
    if (arrayToAnalyse.length !== 0) {
      let arrayToDisplay = arrayToAnalyse
        .sort((a, b) => a.quantity_in_stock - b.quantity_in_stock)
        .filter(obj => obj.quantity_in_stock !== 0)
        .slice(0, 3);
      return <SingleLineGridList beerToDisplay={arrayToDisplay} />
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  showCards = () => {
    let arrayToAnalyse = [...this.props.beerArray];
    if (arrayToAnalyse.length !== 0) {
      const multiplier = this.state.stock === 'asc' ? 1 : -1;
      return arrayToAnalyse
        .sort((a, b) => (a.quantity_in_stock - b.quantity_in_stock) * multiplier)
        .filter(obj => obj.quantity_in_stock !== 0)
        .map((item, index) =>
          <Card
            key={index}
            imageSrc={item.image_url}
            beer={item.beer}
            alcohol={item["alcohol_%"]}
            review={item.average_review_rating_0_to_5}
            brewery={item.brewery}
            numberOfReviews={item.number_of_reviews}
            price={item.price}
            quantityInStock={item.quantity_in_stock}
            size={item.size}
            sku={item.sku}
          />)
    }
  }

  render = () => {
    const { classes } = this.props;
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
        <form className={classes.root} autoComplete="off">
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="price-selector">Qt. stock</InputLabel>
            <Select
              value={this.state.stock}
              onChange={this.handleChange}
              inputProps={{
                name: 'stock',
                id: 'stock-selector',
              }}
            >
              <MenuItem value={'asc'}>Ascending</MenuItem>
              <MenuItem value={'des'}>Descending</MenuItem>
            </Select>
          </FormControl>
        </form>
        <div className="card-wrapper">
          {this.showCards()}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(App));
