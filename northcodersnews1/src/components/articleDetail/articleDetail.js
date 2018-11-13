import React, { Component } from "react";
import Header from "../shared/header/header";
import Article from "./article";
import { getArticle } from "../../utils/api";

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
          {!this.state.loading && <Article article={this.state.article} />}
        </div>
        <div className="sidebar-area">sidebar</div>
      </div>
    );
  }
  componentDidMount() {
    console.log(this.props.articleId + "id");
    getArticle(this.props.articleId).then(article => {
      this.setState({
        article: article,
        loading: false
      });
    });
  }
}

export default ArticleDetail;
