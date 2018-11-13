import React from "react";
import PropTypes from "prop-types";
const Logout = props => {
  return <button onClick={props.onLogout}>log out</button>;
};
Logout.propTypes = {
  onLogout: PropTypes.func
};

export default Logout;
