import * as Types from './../constants/ActionTypes';

let initialStore = {};

const product = (state=initialStore,action) => {
    switch (action.type) {
        case Types.FETCH_PRODUCT_BY_ID:
            return action.product
        default:
            return state;
    }
}

export default product