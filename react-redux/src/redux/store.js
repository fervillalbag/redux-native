import { createStore, combineReducers, applyMiddleware } from "redux";
import cakeReducer from "./cakes/reducer";
import crackerReducer from "./crackers/reducer";
// import thunk from "redux-thunk";

const rootReducer = combineReducers({
  cake: cakeReducer,
  cracker: crackerReducer,
});

const store = createStore(rootReducer);

export default store;
