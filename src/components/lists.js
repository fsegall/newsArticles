import React from "react";
import { renderList } from "./renderList";

function Lists(props) {
  const statusPrivate = props.workStatus[0];
  const privateList = props.articles.filter(article => article.private);
  const statusReview = props.workStatus[1];
  const reviewList = props.articles.filter(article => !article.reviewed);
  const statusReviewed = props.workStatus[2];
  const reviewedList = props.articles.filter(
    article => article.reviewed && !article.publishDate
  );
  const statusPublish = props.workStatus[3];
  const publishList = props.articles.filter(article => article.publishDate);

  return (
    <div>
      {renderList(statusPrivate, privateList)}
      {renderList(statusReview, reviewList)}
      {renderList(statusReviewed, reviewedList)}
      {renderList(statusPublish, publishList)}
    </div>
  );
}

export default Lists;
