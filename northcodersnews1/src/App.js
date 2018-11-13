import React, { Component } from "react";
import { Router } from "@reach/router";
import Home from "./components/home/home";
import ArticleDetail from "./components/articleDetail/articleDetail";

class App extends Component {
  render() {
    return (
      <Router>
        <Home path="/" />
        <ArticleDetail path="/article/:articleId" />
      </Router>
    );
  }
}

export default App;
