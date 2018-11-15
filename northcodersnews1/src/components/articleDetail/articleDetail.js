import React, { Component } from "react";
import Header from "../shared/header";
import Article from "./article";
import { getArticle, voteOnComment } from "../../utils/api";

class ArticleDetail extends Component {
  state = {
    article: {},
    loading: true
  };
  render() {
    return (
      <div className="container">
        <div className={"header-area"}>
          <Header />
        </div>
        <div className={"main-area"}>
          {!this.state.loading && (
            <Article article={this.state.article} onVote={this.onCommentVote} />
          )}
        </div>

        <div className="sidebar-area">sidebar</div>
      </div>
    );
  }
  componentDidMount() {
    getArticle(this.props.articleId).then(article => {
      this.setState({
        article: article,
        loading: false
      });
    });
  }
  onCommentVote(id, direction) {
    voteOnComment(id, direction);
  }
}

export default ArticleDetail;
