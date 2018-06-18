import React from "react";
import { renderList } from "./renderList";
import StatusBar from "./statusBar";

function Lists(props) {
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

  /*   function ArticleNumbers (articlesPrivate, articlesNotReviewed, articlesReviewed, articlesPublished) {

    this. articlesPrivate = articlesPrivate;
    this.articlesNotReviewed = articlesNotReviewed;
    this.articlesReviewed = articlesReviewed;
    this.articlesPublished = articlesPublished;

    this.articlesTotal =
    this.articlesPrivate +
    this.articlesNotReviewed +
    this.articlesReviewed +
    this.articlesPublished;

  } */

  /* props.numbers(articleNumbers);
 */
  return (
    <div>
      <StatusBar
        articlesPrivate={articlesPrivate}
        articlesNotReviewed={articlesNotReviewed}
        articlesReviewed={articlesReviewed}
        articlesPublished={articlesPublished}
      />
      {renderList(statusPrivate, privateList)}
      {renderList(statusReview, reviewList)}
      {renderList(statusReviewed, reviewedList)}
      {renderList(statusPublish, publishList)}
    </div>
  );
}

export default Lists;
