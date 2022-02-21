import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchUsers } from "../redux";

const UserContainer = ({ userData, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, []);

  console.log(userData.users);

  return (
    <div>
      <div></div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContainer);
