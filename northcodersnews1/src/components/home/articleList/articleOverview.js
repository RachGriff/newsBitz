import React from "react";
import { Link } from "@reach/router";

const ArticleOverview = props => {
  return (
    <div className={"articleOverview"}>
      <Link to={"article/" + props.article.id}> {props.article.title}</Link>
      <br />
      {props.article.shortDescription}...
    </div>
  );
};
export default ArticleOverview;
//link mankes a link out of title and will use the path in the app
//router to take user to the article detail by changing the url to /article/:articleId
