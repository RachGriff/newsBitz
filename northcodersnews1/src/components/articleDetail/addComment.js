import React, { Component } from "react";
import { addComment } from "../../utils/api";

class AddNewComment extends Component {
  state = { body: "", error: null };
  render() {
    const invalidInput = this.state.error === 1;
    return (
      <div className="addCommentContainer">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="body" />
            Comment
          </div>
          <div>
            <textarea
              rows="15"
              cols="50"
              disabled={!this.props.user}
              value={this.state.body}
              onChange={this.handleChange}
              type="text-area"
              id="body"
            />
          </div>

          <button disabled={!this.props.user}>Add a comment!</button>
        </form>
        <hr />
        {invalidInput && (
          <div className="invalidInput">Please enter your comment</div>
        )}
        {!this.props.user && <div className="invalidInput">Please log in</div>}
      </div>
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
      this.setState({ error: 1 });
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
