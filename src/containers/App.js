import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { articles, workStatus } from "../data/test.json";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Lists from "../components/lists";
import IconCaption from "../components/iconCaption";
import SecondaryNav from "../components/secondaryNavBar";
import MyArticles from "../components/myArticles";
import Staff from "../components/staff";
import Locked from "../components/locked";

// Main component with route to all pages
/* @hot(module); */

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles,
      workStatus
    };
  }

  /*   componentDidMount() {
      // Update state
      // JSON request to backend goes here
      fetch("articlesURL")
        .then(response => {
          this.setState({
            articles: JSON.parse(response.articles),
            workStatus: JSON.parse(response.workStatus)
          });
        })
        .catch(err => console.log(err));
    }  */

  /*   getArticlesStats = (articleNumbers) => {
      return articleNumbers;
  
    } */

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
                    <Lists articles={articles} workStatus={workStatus} />
                    <IconCaption />
                  </div>
                )}
              />

              <Route
                path="/me"
                render={props => (
                  <div>
                    <MyArticles articles={myArticles} />
                    <IconCaption />
                  </div>
                )}
              />

              <Route
                path="/staff"
                render={props => <Staff articles={articles} />}
              />

              <Route
                path="/locked"
                render={props => (
                  <div>
                    <Locked articles={lockedArticles} />
                    <IconCaption />
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

export default hot(module)(App);
