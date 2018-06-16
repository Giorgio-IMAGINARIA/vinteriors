import { FETCH_BEER } from "../constants/action-types"
import 'whatwg-fetch'

function getHTML( url, callback ) {
    // Feature detection
    if ( !window.XMLHttpRequest ) return;
    // Create new request
    var xhr = new XMLHttpRequest();
    // Setup callback
    xhr.onload = function() {
      if ( callback && typeof( callback ) === 'function' ) {
        callback( this.responseXML );
      }
    }
    // Get the HTML
    xhr.open( 'GET', url );
    xhr.responseType = 'document';
    xhr.send();
  };

function fetchBeerFromAPI() {

    getHTML( 'https://shop.hopburnsblack.co.uk/collections/europe/products/toolmrbrown2018coffeestout10500mlcan', function (response) {
        const documentFound = response.documentElement;
        const canOfBeerSrc = documentFound.querySelector( '#ProductPhotoImg' ).src;
        console.log('canOfBeerSrc: ', canOfBeerSrc)
      });



    let address = `http://demo8465751.mockable.io/products`;
    return dispatch => {
        return fetch(address, { method: 'GET' })
            .then(response => response.json())
            .then(response=>{
                const modifiedArray = response.map(beerElement=>{
                    const modifiedElement = {
                        ...beerElement,
                        image_url: "//cdn.shopify.com/s/files/1/1035/1939/products/image_4361bf20-da35-4552-9c41-ea8d2d4349d2_1024x1024.jpg?v=1519390891"
                    }
                    return modifiedElement;
                })
                return modifiedArray;
            })
            .then(modifiedArray => {
                const arrayToDispatch = [...modifiedArray];
                dispatch(dispatchBeer(arrayToDispatch));
            }).catch((error) => {
                console.log(error);
            });
    };
};

function dispatchBeer(arrayToDispatch) {
    return { type: FETCH_BEER, payload: arrayToDispatch };
};

export const fetchBeer = () => {
    return (dispatch, getState) => {
        return dispatch(fetchBeerFromAPI())
    };
};
