import React from "react";
import src from "../img/avatar.png";

// Renders each user card

const StaffCard = props => {
  return (
    <div className="col-md-3 mt-3">
      <div className="card text-center">
        <img
          className="card-img-top avatar pt-3"
          src={src}
          alt="Card image cap"
        />
        <div className="card-body">
          <h4 className="card-title">{props.article.author}</h4>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo,
            quas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StaffCard;
