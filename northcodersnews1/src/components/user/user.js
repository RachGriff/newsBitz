import React from "react";
import Header from "../shared/header";
import PropTypes from "prop-types";
import SidebarHeader from "../shared/sidebarHeader";
const User = props => {
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
        <div className={"userContainer"}>
          {props.user && (
            <div className="userPage">
              <div>
                <label htmlFor={"name"}>Name:</label>
                <span id={"name"}>{props.user.name}</span>
              </div>
              <br />
              <div>
                <label htmlFor={"username"}>Username:</label>
                <span id={"username"}>{props.user.username}</span>
              </div>
              <br />
              <div>
                <label htmlFor={"avatar"}>Avatar:</label>
                <img
                  className="userAvatarImg"
                  id={"avatar"}
                  src={props.user.avatar_url}
                  alt="user avatar"
                />
              </div>
            </div>
          )}
          {!props.user && <div className="userLoginPrompt">Please log in</div>}
        </div>
      </div>
      <div className="sidebar-area">
        <SidebarHeader title={"Hi there user!"} />
      </div>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object,
  onLogin: PropTypes.func,
  onLogout: PropTypes.func
};
export default User;
