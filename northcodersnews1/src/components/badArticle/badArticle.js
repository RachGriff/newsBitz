import React from "react";
import Header from "../shared/header";
import PropTypes from "prop-types";

const BadArticle = props => {
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
          Sorry, the article you requested could not be found.
        </div>
      </div>
      <div className="sidebar-area" />
    </div>
  );
};

BadArticle.propTypes = {
  user: PropTypes.object,
  onLogin: PropTypes.func,
  onLogout: PropTypes.func
};
export default BadArticle;
