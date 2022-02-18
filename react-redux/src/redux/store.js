import { createStore, combineReducers, applyMiddleware } from "redux";
import cakeReducer from "./cakes/reducer";
import thunk from "redux-thunk";

// const rootReducer = combineReducers({
//   cake: cakeReducer,
// });

const store = createStore(cakeReducer, applyMiddleware(thunk));

export default store;
