import React from "react";
import { connect } from "react-redux";

import { buyCrackers } from "../redux";

const CrackerContainer = (props) => {
  return (
    <div>
      <h2>Number of cakes: {props.numOfCrackers}</h2>
      <button onClick={props.buyCracker}>buy</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCrackers: state.cracker.numOfCrackers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCracker: () => dispatch(buyCrackers()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CrackerContainer);
