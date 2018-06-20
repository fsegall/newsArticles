import React, { Component } from "react";
import { articles, workStatus } from "../data/test.json";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Lists from "../components/lists";
import Legenda from "../components/legenda";
import SecondaryNav from "../components/secondaryNavBar";
import MyArticles from "../components/myArticles";
import Staff from "../components/staff";
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
    const lockedArticles = articles.filter(article => article.locker.locked);
    const myArticles = articles.filter(
      article => article.author === "João Silva" // Add current user from back-end
    );
    return (
      <div className="container">
        <Router>
          <div>
            <SecondaryNav />
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <div>
                    <Lists
                      {...props}
                      articles={articles}
                      workStatus={workStatus}
                    />
                    <Legenda />
                  </div>
                )}
              />

              <Route
                path="/me"
                render={props => (
                  <div>
                    <MyArticles {...props} articles={myArticles} />
                    <Legenda />
                  </div>
                )}
              />

              <Route
                path="/staff"
                render={props => (
                  <Staff
                    {...props}
                    articles={articles.filter(article => article.author)}
                  />
                )}
              />

              <Route
                path="/locked"
                render={props => (
                  <div>
                    <Locked {...props} articles={lockedArticles} />
                    <Legenda />
                  </div>
                )}
              />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default Panel;
