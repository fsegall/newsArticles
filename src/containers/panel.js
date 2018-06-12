import React, { Component } from "react";
import { articles, status } from "../data/test.json";

import Lists from "../components/lists";

class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles,
      status
    };
  }

  // Lifecyclehook to update state
  // JSON request to backend goes here

  render() {
    return (
      <div className="container-fluid">
        <h1>News Workflow</h1>
        <div>{this.props.children}</div>
        <Lists articles={this.state.articles} status={this.state.status} />
      </div>
    );
  }
}

export default Panel;
