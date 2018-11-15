import React from "react";

const TopicSelector = props => {
  const topics = ["football", "coding", "cooking"];
  const handleChange = event => {
    props.onTopicSelect(event.target.value);
  };

  return (
    <select className="dropDown" onChange={handleChange}>
      <option value="">Article Topics</option>
      {topics.map((topic, i) => {
        return (
          <option key={i} value={topic}>
            {topic}
          </option>
        );
      })}
    </select>
  );
};
export default TopicSelector;
