import React from "react";
import { connect } from "react-redux";
import { buyCake, buyCrackers } from "../redux";

const ItemContainer = (props) => {
  return (
    <div>
      <div>{props.item}</div>
      <button onClick={props.buyItem}>buy item</button>
    </div>
  );
};

const mapStateProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.cracker.numOfCrackers;

  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyCrackers());

  return {
    buyItem: dispatchFunction,
  };
};

export default connect(
  mapStateProps,
  mapDispatchToProps
)(ItemContainer);
