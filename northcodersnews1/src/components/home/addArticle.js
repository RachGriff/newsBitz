import React, { Component } from "react";
import { addArticle } from "../../utils/api";
import TopicSelector from "./topicSelector";

class AddNewArticle extends Component {
  state = {
    title: "",
    belongs_to: "",
    body: ""
  };
  render() {
    //could use const disabled = !this.props.user; then use disabled in place of {!this.props.user}
    return (
      <form onSubmit={this.handleSubmit}>
        {!this.props.user && <span>Please log in</span>}
        <br />
        <label htmlFor="Title" />
        <p>
          <br />
          Title
          <input
            disabled={!this.props.user}
            value={this.state.title}
            onChange={this.handleChange}
            type="text"
            id="title"
          />
        </p>
        <label htmlFor="Topic" />
        <p>
          <br />
          Topic
          <TopicSelector onTopicSelect={this.onChangeTopic} />
        </p>
        <label htmlFor="Text" />
        <p>
          <br />
          Text
          <textarea
            rows="10"
            cols="50"
            disabled={!this.props.user}
            value={this.state.body}
            onChange={this.handleChange}
            type="text-area"
            id="body"
          />
        </p>
        <button disabled={!this.props.user}>Add an article!</button>
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
    let article = { ...this.state };
    if (
      //make this drier? - func to check if input.trim ===""||null||!input etc
      article.title.trim() === "" ||
      article.belongs_to.trim() === "" ||
      article.body.trim() === ""
    ) {
      alert("Please complete each field");
    } else {
      article.created_by = this.props.user._id;
      addArticle(article).then(newArticle => {
        newArticle.createdBy.id = this.props.user._id;
        newArticle.createdBy.name = this.props.user.name;

        this.props.onCreateArticle(newArticle);
        this.setState({
          title: "",
          belongs_to: "",
          body: ""
        });
      });
    }
  };
  onChangeTopic = topic => {
    this.setState({ belongs_to: topic });
  };
}
export default AddNewArticle;
