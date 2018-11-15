import React, { Component } from "react";
import Header from "../shared/header";
import Article from "./article";
import { getArticle, voteOnComment } from "../../utils/api";
import AddNewComment from "./addComment";
import CommentList from "./commentList";

class ArticleDetail extends Component {
  state = {
    article: {},
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
          {!this.state.loading && (
            <Article article={this.state.article} onVote={this.onCommentVote} />
          )}
        </div>
        <div>
          <CommentList
            comments={this.state.comments}
            onVote={this.onCommentVote}
          />
        </div>
        <div>
          <AddNewComment
            user={this.props.user}
            onCreateComment={this.onCreateComment}
            belongs_to={this.state.article.id}
          />
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
  onCreateComment = comment => {
    this.setState({
      article: {
        ...this.state.article,
        comments: [comment, ...this.state.article.comments]
      }
    });
  };

  onCommentVote(id, direction) {
    voteOnComment(id, direction);
  }
}

export default ArticleDetail;
