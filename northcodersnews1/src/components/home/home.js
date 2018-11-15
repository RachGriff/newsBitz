import React, { Component } from "react";
import ArticleList from "./articleList/articleList";
import Header from "../shared/header";
import { getAllArticles, voteOnArticle } from "../../utils/api";
import TopicSelector from "./topicSelector";
import PropTypes from "prop-types";
import AddNewArticle from "./addArticle";
class Home extends Component {
  state = {
    articles: [],
    loading: true
  };
  render() {
    return (
      <div className="container">
        <div className={"header-area"}>
          <Header
            onLogin={this.props.onLogin}
            // class
            // Home
            // extends
            // Component
            user={this.props.user}
            onLogout={this.props.onLogout}
          />
        </div>
        <div className={"main-area"}>
          <ArticleList
            show={!this.state.loading}
            articles={this.state.articles}
            onVote={this.onArticleVote}
          />
        </div>

        <div className="sidebar-area" user={this.props.user}>
          <TopicSelector onTopicSelect={this.getArticlesForTopic} />
          <AddNewArticle
            user={this.props.user}
            onCreateArticle={this.onCreateArticle}
          />
        </div>
      </div>
    );
  }
  componentDidMount() {
    getAllArticles("").then(articles => {
      this.setState({
        articles: articles,
        loading: false
      });
    });
  }

  getArticlesForTopic = topicFilter => {
    getAllArticles(topicFilter).then(articles => {
      this.setState({
        articles: articles,
        loading: false
      });
    });
  };

  onCreateArticle = article => {
    this.setState({
      articles: [article, ...this.state.articles]
    });
  };

  onArticleVote = (id, direction) => {
    voteOnArticle(id, direction);
  };
}
Home.propTypes = {
  user: PropTypes.object,
  onLogin: PropTypes.func,
  onLogout: PropTypes.func
}; //tells us that user will be passed props & this will be an obj,
//but we also need to pass in a func to login component so that this can affect state at top.
export default Home;
