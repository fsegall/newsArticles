import React from "react";

function StatusBar(props) {
  console.log(props);
  const articlesTotal =
    props.articlesPrivate +
    props.articlesNotReviewed +
    props.articlesReviewed +
    props.articlesPublished;

  return (
    <div>
      <div className="text-right d-flex justify-content-end flex-wrap">
        <button className="btn btn-secondary mx-1">My Articles</button>
        <button className="btn btn-secondary">Authors</button>
      </div>
      <div className="d-flex flex-wrap justify-content-start text-white font-bold text-center">
        <div className="d-flex flex-wrap text-white font-bold text-center">
          <div className="bg-secondary mt-1 box">
            <p className="p-2">{`Total ${articlesTotal}`}</p>
          </div>
          <div className="bg-danger mt-1 box">
            <p className="p-2">{`Private ${props.articlesPrivate}`}</p>
          </div>
          <div className="bg-warning mt-1 box">
            <p className="p-2">{`Not Reviewed ${props.articlesNotReviewed}`}</p>
          </div>
          <div className="bg-success mt-1 box">
            <p className="p-2">{`Reviewed ${props.articlesReviewed}`}</p>
          </div>
          <div className="bg-primary mt-1 box">
            <p className="p-2">{`Published ${props.articlesPublished}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default StatusBar;
