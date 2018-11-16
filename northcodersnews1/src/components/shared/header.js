import React from "react";
import PropTypes from "prop-types";
import Login from "./login";
import Logout from "./logout";
import logo from "../../resources/images/logo.png";
import { Link } from "@reach/router";

const Header = ({ user, onLogin, onLogout }) => {
  return (
    <div className="header">
      <Link to="/">
        <img className="logo" src={logo} alt="newsBitz sloth logo" />
      </Link>

      <div className="title">newsBitz</div>
      <div className="loginLogout">
        {!user && <Login onLogin={onLogin} />}
        {user && <Logout onLogout={onLogout} user={user} />}
      </div>
    </div>
  );
};

Header.propTypes = {
  user: PropTypes.object,
  onLogin: PropTypes.func,
  onLogout: PropTypes.func
};

export default Header;
