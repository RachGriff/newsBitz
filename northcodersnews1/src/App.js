import React, { Component } from "react";
import { Router } from "@reach/router";
import Home from "./components/home/home";
import ArticleDetail from "./components/articleDetail/articleDetail";
import { newLogin } from "./utils/api";
import ErrorHandler from "./error";
// import navigate from "@reach/router";
class App extends Component {
  state = {
    user: null,
    error: null
  };
  render() {
    return (
      <Router>
        <Home
          path="/"
          user={this.state.user}
          onLogin={this.login}
          onLogout={this.logout}
        />
        <ArticleDetail
          path="/article/:articleId"
          user={this.state.user}
          onLogin={this.login}
          onLogout={this.logout}
        />
        <ErrorHandler path="/error/" error={this.state.error} />
      </Router>
    );
  }
  login = username => {
    newLogin(username).then(user => {
      this.setState({
        user
      });
    });
  };
  logout = () => {
    this.setState({
      user: null
    });
  };
}

export default App;
