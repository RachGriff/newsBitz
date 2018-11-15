import React from "react";
import Vote from "../shared/vote";

const SingleComment = ({ user, onVote, onCommentDelete, comment }) => {
  let commentCreatedByLoggedInUser = false;
  if (user) {
    commentCreatedByLoggedInUser = user._id === comment.created_by._id;
  }
  return (
    <div className={"singleComment"}>
      {comment.body}
      {""} {"Created by:  " + comment.created_by.username}
      <br />
      <Vote id={comment._id} numberOfVotes={comment.votes} onVote={onVote} />
      {commentCreatedByLoggedInUser && (
        <button onClick={() => onCommentDelete(comment._id)}>Delete</button>
      )}
    </div>
  );
};

export default SingleComment;
//delete
