import React from "react";
import CommentList from "./commentList";
const Article = ({ article, onVote }) => {
  return (
    <div>
      <div>
        Votes:{article.votes}
        <br />
        Title:{article.title}
        <br />
        Topic:{article.topic}
        <br />
        Article:{article.article}
        <br />
        Created By:{article.createdBy.name}
        <br />
      </div>
      <CommentList comments={article.comments} onVote={onVote} />
    </div>
  );
};
export default Article;
//remember -not props.article.comments in CommentList because have deconstr
