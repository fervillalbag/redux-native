import logger from "redux-logger";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import crackerReducer from "./crackers/reducer";
import cakeReducer from "./cakes/reducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  cracker: crackerReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
