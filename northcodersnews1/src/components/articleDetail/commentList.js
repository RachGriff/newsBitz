import React from "react";
import PropTypes from "prop-types";
import SingleComment from "./singleComment";

const CommentList = ({ user, onVote, onCommentDelete, comments }) => {
  if (!comments) return "";
  return (
    <div className="commentList">
      {comments.map((comment, index) => {
        return (
          <SingleComment
            user={user}
            comment={comment}
            key={index}
            onVote={onVote}
            onCommentDelete={onCommentDelete}
          />
        );
      })}
    </div>
  );
};

CommentList.propsTypes = {
  comments: PropTypes.array,
  user: PropTypes.object,
  onVote: PropTypes.func,
  onCommentDelete: PropTypes.func
};

export default CommentList;
