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
      <div className="addArticle">
        <form onSubmit={this.handleSubmit}>
          {!this.props.user && <div>Please log in</div>}
          <div>
            <label htmlFor="title"> what's it about?</label>
          </div>
          <div>
            <input
              disabled={!this.props.user}
              value={this.state.title}
              onChange={this.handleChange}
              type="text"
              id="title"
            />
          </div>
          <div>
            <label htmlFor="topic">what's the topic?</label>
          </div>
          <TopicSelector onTopicSelect={this.onChangeTopic} />
          <div>
            <label htmlFor="body">your article</label>
          </div>

          <div>
            <textarea
              rows="10"
              cols="50"
              disabled={!this.props.user}
              value={this.state.body}
              onChange={this.handleChange}
              type="text-area"
              id="body"
            />
          </div>
          <button disabled={!this.props.user}>Add an article!</button>
        </form>
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
