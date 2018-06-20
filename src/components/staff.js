import React from "react";
import src from "../img/avatar.png";
const Staff = props => {
  console.log(props.articles);
  return (
    <div className="container d-flex justify-content-between flex-wrap">
      <div className="col-md-3 mt-3">
        <div className="card text-center">
          <img
            className="card-img-top avatar pt-3"
            src={src}
            alt="Card image cap"
          />
          <div className="card-body">
            <h4 className="card-title">{props.articles[0].author}</h4>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo,
              quas.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-3 mt-3">
        <div className="card text-center">
          <img
            className="card-img-top avatar pt-3"
            src={src}
            alt="Card image cap"
          />
          <div className="card-body">
            <h4 className="card-title">{props.articles[0].author}</h4>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo,
              quas.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-3 mt-3">
        <div className="card text-center">
          <img
            className="card-img-top avatar pt-3"
            src={src}
            alt="Card image cap"
          />
          <div className="card-body">
            <h4 className="card-title">{props.articles[0].author}</h4>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo,
              quas.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-3 mt-3">
        <div className="card text-center">
          <img
            className="card-img-top avatar pt-3"
            src={src}
            alt="Card image cap"
          />
          <div className="card-body">
            <h4 className="card-title">{props.articles[0].author}</h4>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo,
              quas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staff;
