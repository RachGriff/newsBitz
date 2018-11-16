import React from "react";
import PropTypes from "prop-types";
import sideBarImage from "../../resources/images/headerSloth.jpg";

const SidebarHeader = ({ title }) => {
  return (
    <div className="topicSelectorHeader">
      <img
        className="headerSloth"
        src={sideBarImage}
        alt="side bar header logo"
      />
      <div className="sideBarHeaderText ">{title}</div>
    </div>
  );
};

SidebarHeader.propTypes = {
  title: PropTypes.string
};

export default SidebarHeader;
