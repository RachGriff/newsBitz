import React from "react";
import PropTypes from "prop-types";
import ArticleOverview from "./articleOverview";

const ArticleList = props => {
  if (props.show)
    return (
      <div className="articleList">
        {props.articles.map((articles, index) => {
          return (
            <ArticleOverview
              article={articles}
              key={index}
              onVote={props.onVote}
            />
          );
        })}
      </div>
    );
  return "";
};

ArticleList.propsTypes = {
  articles: PropTypes.array
};

export default ArticleList;
