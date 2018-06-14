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
      <div className="text-right">
        <button className="btn btn-secondary m-1">My Articles</button>
        <button className="btn btn-secondary m-1">Authors</button>
        <button className="btn btn-warning m-1">Locked</button>
      </div>
      <div className="row">
        <div className="d-flex flex-wrap text-white font-bold text-center col-md-6">
          <div className="bg-secondary box p-2">
            <p className="">Total</p>
            <div className="">{articlesTotal}</div>
          </div>

          <div className="bg-danger box p-2">
            <p className="">Private</p>
            <div>{props.articlesPrivate}</div>
          </div>

          <div className="bg-warning box p-2">
            <p className="">Edit</p>
            <div className="">{props.articlesNotReviewed}</div>
          </div>

          <div className="bg-success box p-2">
            <p className="">Reviewed</p>
            <div className="">{props.articlesReviewed}</div>
          </div>

          <div className="bg-primary box p-2">
            <p className="">Published</p>
            <div className="">{props.articlesPublished}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default StatusBar;
