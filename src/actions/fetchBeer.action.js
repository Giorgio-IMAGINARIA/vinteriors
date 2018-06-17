import { FETCH_BEER } from "../constants/action-types"
import 'whatwg-fetch'

function getHTML(url, callback, arrayPassed, index) {
    // Feature detection
    if (!window.XMLHttpRequest) return;
    // Create new request
    var xhr = new XMLHttpRequest();
    // Setup callback
    xhr.onload = function () {
        if (callback && typeof (callback) === 'function') {
            callback(this.responseXML, arrayPassed, index);
        }
    }
    // Get the HTML
    xhr.open('GET', url);
    xhr.responseType = 'document';
    xhr.send();
};

function fetchBeerFromAPI() {
    let address = `http://demo8465751.mockable.io/products`;
    return dispatch => {
        return fetch(address, { method: 'GET' })
            .then(response => response.json())
            .then(arrayRetrieved => {
                let i;
                for (i = 0; i < arrayRetrieved.length; i++) {
                    const pageUrl = arrayRetrieved[i].image_url;
                    let newSrc;
                    getHTML(pageUrl, function (response, arrayToProcess, j) {
                        const documentFound = response.documentElement;
                        const canOfBeerSrc = (documentFound && documentFound.querySelector('#ProductPhotoImg')) ? documentFound.querySelector('#ProductPhotoImg').src : 'http://via.placeholder.com/350x150';
                        newSrc = canOfBeerSrc
                        arrayToProcess[j].image_url = newSrc;
                        const arrayToDispatch = [...arrayToProcess];
                        dispatch(dispatchBeer(arrayToDispatch));
                    }, arrayRetrieved, i);
                }
            })
            .catch((error) => {
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
