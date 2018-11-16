import React from "react";
import { Link } from "@reach/router";
import Vote from "../../shared/vote";

const ArticleOverview = props => {
  return (
    <div className={"articleOverview"}>
      <Link className="articleOverviewTitle" to={"article/" + props.article.id}>
        {" "}
        {props.article.title}
      </Link>
      <div className="articleOverviewContent">
        {props.article.shortDescription}...
      </div>
      <div className="articleOverviewFooter">
        <div className="articleOverviewFooterOne">
          <Vote
            id={props.article.id}
            numberOfVotes={props.article.votes}
            onVote={props.onVote}
          />
        </div>
        <div className="articleOverviewFooterTwo">
          Author: {props.article.createdBy.name}
        </div>
        <div className="articleOverviewFooterThree">
          Comment count:
          {props.article.commentCount}
        </div>
      </div>
    </div>
  );
};
export default ArticleOverview;
