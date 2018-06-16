import { FETCH_BEER } from "../constants/action-types";

const initialState = {
    beerArray: []
};

const rootReducer = (state = initialState, action) => {
    if (action.type === FETCH_BEER) return {
        ...state,
        beerArray: [...action.payload]
    };
    return state;
};

export default rootReducer;
