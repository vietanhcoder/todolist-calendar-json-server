import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
//import reducers

import todoReducers from "./redux/reducers";

//config for Reducers

const allReducers = {
  todoReducers,
};
const reducers = combineReducers({
  ...allReducers,
});
const stores = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
export default stores;
