import React, { Component } from "react";
import ArticleList from "./articleList/articleList";
import Header from "../shared/header";
import { getAllArticles, voteOnArticle, getAllTopics } from "../../utils/api";
import TopicSelector from "./topicSelector";
import PropTypes from "prop-types";
import AddNewArticle from "./addArticle";
import SidebarHeader from "../shared/sidebarHeader";
import Loading from "../shared/loading";

class Home extends Component {
  state = {
    articles: [],
    loading: true,
    topicsArray: ["football"]
  };
  render() {
    return (
      <div className="container">
        <div className={"header-area"}>
          <Header
            onLogin={this.props.onLogin}
            user={this.props.user}
            onLogout={this.props.onLogout}
            error={this.props.error}
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
          <div className="topicSelector">
            <SidebarHeader title={"filter your articles"} />
            <TopicSelector
              onTopicSelect={this.getArticlesForTopic}
              topicsArray={this.state.topicsArray}
            />
          </div>
          <div className="createArticle">
            <SidebarHeader title={"write a new article"} />
            <AddNewArticle
              user={this.props.user}
              onCreateArticle={this.onCreateArticle}
              topicsArray={this.state.topicsArray}
            />
          </div>
        </div>
        <Loading show={this.state.loading} />
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
    getAllTopics().then(topics => {
      const topicArr = topics.map(topic => topic.slug);
      this.setState({
        topicsArray: topicArr
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
};
export default Home;
