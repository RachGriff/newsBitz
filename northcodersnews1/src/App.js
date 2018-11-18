import React, { Component } from "react";
import { Router } from "@reach/router";
import Home from "./components/home/home";
import ArticleDetail from "./components/articleDetail/articleDetail";
import { newLogin } from "./utils/api";
import NotFound from "./components/notFound/notFound";
import BadArticle from "./components/badArticle/badArticle";
import User from "./components/user/user";
import { navigate } from "@reach/router";

class App extends Component {
  state = {
    user: null,
    error: null
  };
  render() {
    return (
      <Router>
        <NotFound
          default
          user={this.state.user}
          error={this.state.error}
          onLogin={this.login}
          onLogout={this.logout}
        />
        <Home
          path="/"
          user={this.state.user}
          error={this.state.error}
          onLogin={this.login}
          onLogout={this.logout}
        />

        <ArticleDetail
          path="/article/:articleId"
          user={this.state.user}
          error={this.state.error}
          onLogin={this.login}
          onLogout={this.logout}
        />
        <BadArticle path="/badArticle" />
        <User
          path="/user"
          user={this.state.user}
          error={this.state.error}
          onLogin={this.login}
          onLogout={this.logout}
        />
      </Router>
    );
  }
  login = username => {
    newLogin(username)
      .then(user => {
        this.setState({
          user,
          error: null
        });
      })
      .catch(error => {
        this.setState({
          user: null,
          error: 1
        });
      });
  };
  logout = () => {
    this.setState({
      user: null
    });
    navigate("/");
  };
}

export default App;
