import React from "react";
import PropTypes from "prop-types";
import Login from "./login";
import Logout from "./logout";

const Header = ({ user, onLogin, onLogout }) => {
  return (
    <div>
      {!user && <Login onLogin={onLogin} />}
      {user && <Logout onLogout={onLogout} />}
      NCNews Bitz
    </div>
  );
};

Header.propTypes = {
  user: PropTypes.object,
  onLogin: PropTypes.func,
  onLogout: PropTypes.func
};

export default Header;
//if there is not a user instantiate Login  - logically 'anding' variable with a component which is truthy,
// so if thing at start is true, then component will render - so if not logged in, show login
