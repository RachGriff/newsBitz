import React from "react";
import PropTypes from "prop-types";
import SingleComment from "./comment";

const CommentList = props => {
  if (!props.comments) return "";
  return (
    <div className="commentList">
      {props.comments.map((comment, index) => {
        return (
          <SingleComment comment={comment} key={index} onVote={props.onVote} />
        );
      })}
    </div>
  );
};

CommentList.propsTypes = {
  comments: PropTypes.array
};

export default CommentList;
