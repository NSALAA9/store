import { combineReducers, createStore, applyMiddleware } from "redux";
import { catReducer } from "./categoriesReducer";
import { proReducer } from "./productsReducer";
import { cartReducer } from "./cartReducer";
// import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";


const reducers = combineReducers({ catReducer, proReducer, cartReducer });

function store() {
  return createStore(reducers, applyMiddleware(thunk));
}

export default store();