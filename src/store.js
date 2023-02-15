import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";

import { CartReducer } from "../src/Modules/reducer";

export default createStore(
  combineReducers({
    cart: CartReducer,
  }),
  applyMiddleware(thunk)
);
