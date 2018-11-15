import React, { Component } from "react";

class Vote extends Component {
  state = {
    voteChange: 0
  };
  render() {
    const onClick = direction => {
      this.props.onVote(this.props.id, direction);
      if (direction === "up") {
        this.setState({
          voteChange: this.state.voteChange + 1
        });
      } else {
        this.setState({
          voteChange: this.state.voteChange - 1
        });
      }
    };

    return (
      <div>
        <button onClick={() => onClick("up")}>^</button>
        Votes:{this.props.numberOfVotes + this.state.voteChange}
        <button onClick={() => onClick("down")}>v</button>
      </div>
    );
  }
}
export default Vote;
