import React from "react";

const Article = ({ article }) => {
  console.log(article, "its here");
  return (
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
  );
};
export default Article;
