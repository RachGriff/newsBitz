import React from "react";

const Loading = props => {
  if (props.show)
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  else return "";
};
export default Loading;
