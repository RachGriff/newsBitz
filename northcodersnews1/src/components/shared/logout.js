import React from "react";
import PropTypes from "prop-types";
import { Link } from "@reach/router";

const Logout = props => {
  return (
    <div className="logoutContainer">
      <img
        className="avatarImage"
        src={props.user.avatar_url}
        alt="user avatar"
      />
      <div className="logoutDetails">
        <div className="logoutUsername">
          <Link to={"/user"}>{props.user.username}</Link>
        </div>
        <button className="btn" onClick={props.onLogout}>
          log out
        </button>
      </div>
    </div>
  );
};
Logout.propTypes = {
  onLogout: PropTypes.func
};

export default Logout;
