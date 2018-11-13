import React, { Component } from "react";

class Login extends Component {
  state = {
    username: ""
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          onChange={this.handleChange}
          id="username"
          type="text"
          value={this.state.username}
        />
        <button>Log in</button>
      </form>
    );
  }
  handleSubmit = event => {
    event.preventDefault();
    this.props.onLogin(this.state.username);
  };
  handleChange = event => {
    const { value, id } = event.target;
    this.setState({
      [id]: value //sets property with the name that is stored in id(in input) to the value. Generic.
    });
  };
}

export default Login;
