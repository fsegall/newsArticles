import React, { Component } from "react";
import { articles, workStatus } from "../data/test.json";

import Lists from "../components/lists";

class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles,
      workStatus
    };

    // Update state
    // JSON request to backend goes here
    fetch("articlesURL")
      .then(response => {
        this.setState({
          articles: JSON.parse(response.articles),
          workStatus: JSON.parse(response.status)
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container-fluid">
        <h1>News Workflow</h1>
        <div>{this.props.children}</div>
        <Lists
          articles={this.state.articles}
          workStatus={this.state.workStatus}
        />
        {/* <Legenda /> */}
      </div>
    );
  }
}

export default Panel;
