import React from "react";
import { renderList } from "./renderList";
import StatusBar from "./statusBar";

// Renders all lists of articles calling renderList helper function and the StatusBar with list item counters

const Lists = props => {
  const statusPrivate = props.workStatus[0];
  const privateList = props.articles.filter(article => article.private);

  const articlesPrivate = privateList.length;

  const statusReview = props.workStatus[1];
  const reviewList = props.articles.filter(article => !article.reviewed);

  const articlesNotReviewed = reviewList.length;

  const statusReviewed = props.workStatus[2];
  const reviewedList = props.articles.filter(
    article => article.reviewed && !article.publishDate
  );

  const articlesReviewed = reviewedList.length;

  const statusPublish = props.workStatus[3];
  const publishList = props.articles.filter(article => article.publishDate);

  const articlesPublished = publishList.length;

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
      </div>
      <div className="pt-3 row no-gutters">
        <div className="col-lg-3">{renderList(statusPrivate, privateList)}</div>
        <div className="col-lg-3">{renderList(statusReview, reviewList)}</div>
        <div className="col-lg-3">
          {renderList(statusReviewed, reviewedList)}
        </div>
        <div className="col-lg-3">{renderList(statusPublish, publishList)}</div>
      </div>
    </div>
  );
};

export default Lists;
