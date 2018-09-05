import React, { Component } from "react";
import { renderList } from "./renderList";
import StatusBar from "./statusBar";

// Renders all lists of articles calling renderList helper function and the StatusBar with list item counters

class Lists extends Component {

  constructor(props) {
    super(props)
    this.onchange = this.onChange.bind(this);
  }

  state = {
    articles: this.props.articles
  }



  onChange = (e) => {

    let updatedList = this.state.articles.filter(article =>


      article.headline.toLowerCase().search(e.target.value.toLowerCase()) !== -1

    )

    console.log('updatedList', updatedList);

    return this.setState({
      articles: e.target.value ? updatedList : this.props.articles
    })

  }

  render() {
    // Article status, filters for lists and list count

    const statusPrivate = this.props.workStatus[0]
    const privateList = this.state.articles.filter(article => article.private)
    const articlesPrivate = privateList.length


    const statusReview = this.props.workStatus[1]
    const reviewList = this.state.articles.filter(article => !article.reviewed)
    const articlesNotReviewed = reviewList.length

    const statusReviewed = this.props.workStatus[2]
    const reviewedList = this.state.articles.filter(
      article => article.reviewed && !article.publishDate
    )
    const articlesReviewed = reviewedList.length

    const statusPublish = this.props.workStatus[3]
    const publishList = this.state.articles.filter(article => article.publishDate)
    const articlesPublished = publishList.length

    return (
      <div className="container-fluid">
        <div className="row">
          <div col-md-12>
            <StatusBar
              articlesPrivate={articlesPrivate}
              articlesNotReviewed={articlesNotReviewed}
              articlesReviewed={articlesReviewed}
              articlesPublished={articlesPublished}
            />
          </div>

          <form className="searchTitle ml-3">
            <label>
              Filtrar por título:
            <input
                className="ml-2"
                type="text"
                onChange={this.onChange}
              />
            </label>
          </form>
        </div>
        <div className="pt-3 row no-gutters">
          <div className="col-lg-3">{renderList(statusPrivate, privateList)}</div>
          <div className="col-lg-3">{renderList(statusReview, reviewList)}</div>
          <div className="col-lg-3">{renderList(statusReviewed, reviewedList)}</div>
          <div className="col-lg-3">{renderList(statusPublish, publishList)}</div>
        </div>
      </div>
    );
  };
};

export default Lists;
