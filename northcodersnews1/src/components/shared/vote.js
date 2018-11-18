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
        <button
          onClick={() => onClick("up")}
          disabled={this.state.voteChange !== 0}
        >
          ^
        </button>
        Votes:{this.props.numberOfVotes + this.state.voteChange}
        <button
          onClick={() => onClick("down")}
          disabled={this.state.voteChange !== 0}
        >
          v
        </button>
      </div>
    );
  }
}
export default Vote;
