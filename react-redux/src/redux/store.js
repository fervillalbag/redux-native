// import logger from "redux-logger";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import crackerReducer from "./crackers/reducer";
import cakeReducer from "./cakes/reducer";
import usersReducer from "./user/reducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  cracker: crackerReducer,
  users: usersReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
