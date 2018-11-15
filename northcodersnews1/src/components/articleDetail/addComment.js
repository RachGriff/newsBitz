import React, { Component } from "react";
import { addComment } from "../../utils/api";

class AddNewComment extends Component {
  state = { body: "" };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {!this.props.user && <span>Please log in</span>}
        <br />
        <label htmlFor="body" />
        <p>
          <br />
          Comment
          <textarea
            rows="5"
            cols="50"
            disabled={!this.props.user}
            value={this.state.body}
            onChange={this.handleChange}
            type="text-area"
            id="body"
          />
        </p>
        <button disabled={!this.props.user}>Add a comment!</button>
      </form>
    );
  }
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    let comment = { ...this.state };
    if (comment.body.trim() === "") {
      alert("Please complete comment field");
    } else {
      comment.created_by = this.props.user._id;
      comment.belongs_to = this.props.belongs_to;
      addComment(comment).then(newComment => {
        newComment.created_by = {
          id: this.props.user._id,
          username: this.props.user.username
        };
        this.props.onCreateComment(newComment);
        this.setState({
          body: ""
        });
      });
    }
  };
}

export default AddNewComment;
