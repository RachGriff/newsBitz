import React from "react";
import Header from "../shared/header";
import PropTypes from "prop-types";

const NotFound = props => {
  return (
    <div className="container">
      <div className={"header-area"}>
        <Header
          onLogin={props.onLogin}
          user={props.user}
          onLogout={props.onLogout}
          error={props.error}
        />
      </div>
      <div className={"main-area"}>
        <div className={"notFound"}>
          Sorry, we couldn't find what you were looking for.
        </div>
      </div>
      <div className="sidebar-area" />
    </div>
  );
};

NotFound.propTypes = {
  user: PropTypes.object,
  onLogin: PropTypes.func,
  onLogout: PropTypes.func
};
export default NotFound;
