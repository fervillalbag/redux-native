import { BUY_CRACKERS } from "./types";

const initialState = {
  numOfCrackers: 15,
};

const crackerReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CRACKERS:
      return {
        ...state,
        numOfCrackers: state.numOfCrackers - 1,
      };

    default:
      return state;
  }
};

export default crackerReducer;
