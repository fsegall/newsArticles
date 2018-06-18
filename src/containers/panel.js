import React, { Component } from "react";
import { articles, workStatus } from "../data/test.json";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Lists from "../components/lists";
import Legenda from "../components/legenda";
import SecondaryNav from "../components/secondaryNavBar";
import MyArticles from "../components/myArticles";
import Authors from "../components/authors";
import Locked from "../components/locked";

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
    const articles = this.state.articles;
    const workStatus = this.state.workStatus;
    return (
      <Router>
        <div>
          <SecondaryNav />
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Lists {...props} articles={articles} workStatus={workStatus} />
              )}
            />

            <Route
              path="/me"
              render={props => (
                <MyArticles
                  {...props}
                  articles={articles.filter(
                    article => article.author === "João Silva"
                  )}
                />
              )}
            />

            <Route
              path="/authors"
              render={props => (
                <Authors
                  {...props}
                  articles={articles.filter(article => article.author)}
                />
              )}
            />

            <Route
              path="/locked"
              render={props => (
                <Locked
                  {...props}
                  articles={articles.filter(article => article.Locked)}
                />
              )}
            />
          </Switch>
          <Legenda />
        </div>
      </Router>
    );
  }
}

export default Panel;
