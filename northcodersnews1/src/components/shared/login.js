import React, { Component } from "react";

class Login extends Component {
  state = {
    username: ""
  };
  render() {
    return (
      <div className="loginContainer">
        <form onSubmit={this.handleSubmit}>
          <label className="loginLabel" htmlFor="username">
            username:
          </label>
          <span className="loginOutline">
            <input
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

export default Login;
