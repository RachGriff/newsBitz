import React, { Component } from "react";
import ArticleList from "./articleList/articleList";
import Header from "../shared/header";
import { getAllArticles } from "../../utils/api";
import TopicSelector from "./topicSelector";
import PropTypes from "prop-types";

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
            user={this.props.user}
            onLogout={this.props.onLogout}
          />
        </div>
        <div className={"main-area"}>
          <ArticleList
            show={!this.state.loading}
            articles={this.state.articles}
          />
        </div>

        <div className="sidebar-area" user={this.props.user}>
          <TopicSelector onTopicSelect={this.getArticlesForTopic} />
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
}

Home.propTypes = {
  user: PropTypes.object,
  onLogin: PropTypes.func,
  onLogout: PropTypes.func
}; //tells us that user will be passed props & this will be an obj,
//but we also need to pass in a func to login component so that this can affect state at top.
export default Home;
