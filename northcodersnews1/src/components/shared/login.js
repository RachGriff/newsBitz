import React, { Component } from "react";
import PropTypes from "prop-types";

class Login extends Component {
  state = {
    username: ""
  };
  render() {
    const invalidUserName = this.props.error === 1;
    return (
      <div className="loginContainer">
        <div>
          <form onSubmit={this.handleSubmit}>
            <label className="loginLabel" htmlFor="username">
              username:
            </label>
            <span className="loginOutline">
              <input
                placeholder={"jessjelly"}
                className="loginInput"
                onChange={this.handleChange}
                id="username"
                type="text"
                value={this.state.username}
              />
            </span>
            <button className="btn">Log in</button>
          </form>
        </div>
        {invalidUserName && (
          <div className="invalidUserName">Invalid username</div>
        )}
      </div>
    );
  }
  handleSubmit = event => {
    event.preventDefault();
    this.props.onLogin(this.state.username);
  };
  handleChange = event => {
    const { value, id } = event.target;
    this.setState({
      [id]: value
    });
  };
}
Login.propTypes = {
  user: PropTypes.object,
  onLogin: PropTypes.func,
  error: PropTypes.number
};
export default Login;
