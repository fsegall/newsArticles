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
    /*     fetch("articlesURL")
      .then(response => {
        this.setState({
          articles: JSON.parse(response.articles),
          workStatus: JSON.parse(response.workStatus)
        });
      })
      .catch(err => console.log(err));
  } */

    /*   getArticlesStats = (articleNumbers) => {
    return articleNumbers;
*/
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="ItIsaFont d-inline">
          <i class="fab fa-earlybirds" />
        </div>
        <h1 className="d-inline ml-2">News Workflow</h1>
        <div>{this.props.children}</div>
        <Lists
          articles={this.state.articles}
          workStatus={this.state.workStatus}
        />
      </div>
    );
  }
}

export default Panel;
