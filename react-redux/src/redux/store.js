import { createStore, applyMiddleware } from "redux";
import cakeReducer from "./cakes/reducer";
import thunk from "redux-thunk";

const store = createStore(cakeReducer, applyMiddleware(thunk));

export default store;
