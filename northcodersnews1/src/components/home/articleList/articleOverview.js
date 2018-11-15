import React from "react";
import { Link } from "@reach/router";
import Vote from "../../shared/vote";

const ArticleOverview = props => {
  return (
    <div className={"articleOverview"}>
      <Link to={"article/" + props.article.id}> {props.article.title}</Link>
      <br />
      <React.Fragment>
        <div>
          Author: {props.article.createdBy.name}{" "}
          <div className="articleList-commentCount">
            {" "}
            Comment count:
            {props.article.commentCount}
          </div>
        </div>{" "}
      </React.Fragment>
      <Vote
        id={props.article.id}
        numberOfVotes={props.article.votes}
        onVote={props.onVote}
      />
      <br />
      {props.article.shortDescription}...
    </div>
  );
};
export default ArticleOverview;
//link mankes a link out of title and will use the path in the app
//router to take user to the article detail by changing the url to /article/:articleId
//article overview is called from article list so vote func needs to be there.
