import React from "react";
import spinner from "../../resources/images/spinner.gif";

const Loading = props => {
  if (props.show)
    return (
      <div className="spinnerContainer">
        <div className="spinner" />
        <div className="spinner">
          <img src={spinner} alt={"spinner"} className="spinnerImg" />
          <div className="loadingText">loading...</div>
        </div>
      </div>
    );
  else return "";
};
export default Loading;
