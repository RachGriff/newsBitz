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
      <div className="articleOverviewFooter">
        <div className="articleOverviewFooterOne">
          <Vote
            id={comment._id}
            numberOfVotes={comment.votes}
            onVote={onVote}
          />
        </div>
        <div className="commentFooterTwo">
          {commentCreatedByLoggedInUser && (
            <button onClick={() => onCommentDelete(comment._id)}>Delete</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleComment;
//delete
