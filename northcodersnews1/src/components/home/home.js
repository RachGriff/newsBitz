import React, { Component } from "react";
import ArticleList from "./articleList/articleList";
import Header from "../shared/header/header";
import { getAllArticles } from "../../utils/api";

class Home extends Component {
  state = {
    articles: [],
    loading: true
  };
  render() {
    return (
      <div className="container">
        <div className={"header-area"}>
          <Header />
        </div>
        <div className={"main-area"}>
          <ArticleList
            show={!this.state.loading}
            articles={this.state.articles}
          />
        </div>
        <div className="sidebar-area">sidebar</div>
      </div>
    );
  }
  componentDidMount() {
    getAllArticles().then(articles => {
      this.setState({
        articles: articles,
        loading: false
      });
    });
  }
}

export default Home;
