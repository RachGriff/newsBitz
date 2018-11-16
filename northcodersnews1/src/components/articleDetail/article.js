import React from "react";
import CommentList from "./commentList";
const Article = ({ user, article, onVote, onCommentDelete }) => {
  return (
    <div>
      <div className="articleDetailContainer">
        <div className="articleTitle">Title:{article.title}</div>

        <div className="articleContent">Article:{article.article}</div>

        <div className="articleFooter">
          <div className="articleFooterOne">Votes:{article.votes}</div>
          <div className="articleFooterTwo">Topic:{article.topic}</div>
          <div className="articleFooterThree">
            Created By:{article.createdBy.name}
          </div>
        </div>
      </div>
      <CommentList
        comments={article.comments}
        onVote={onVote}
        onCommentDelete={onCommentDelete}
        user={user}
      />
    </div>
  );
};
export default Article;
//remember -not props.article.comments in CommentList because have deconstr
