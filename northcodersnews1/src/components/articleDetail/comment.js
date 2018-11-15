import React from "react";
import Vote from "../shared/vote";

const SingleComment = props => {
  return (
    <div className={"singleComment"}>
      {props.comment.body}
      {""} {"Created by:  " + props.comment.created_by.username}
      <br />
      <Vote
        id={props.comment._id}
        numberOfVotes={props.comment.votes}
        onVote={props.onVote}
      />
    </div>
  );
};
export default SingleComment;
