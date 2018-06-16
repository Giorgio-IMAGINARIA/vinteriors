import { FETCH_BEER } from "../constants/action-types"
import 'whatwg-fetch'

function fetchBeerFromAPI() {
    let address = `http://demo8465751.mockable.io/products`;
    return dispatch => {
        return fetch(address, { method: 'GET' })
            .then(response => response.json())
            .then(json => {
                const arrayToDispatch = [...json];
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
