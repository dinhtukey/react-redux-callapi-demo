import { combineReducers } from "redux"
import products from './products';
import product from './product';
const appReducers = combineReducers({
    products,product
});

export default appReducers;