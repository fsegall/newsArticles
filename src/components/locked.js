import React from "react";

function Locked(props) {
  if (props.locked) {
    return (
      <div className="text-right">
        <span className="mr-2 text-warning">
          John Silva is editing this content.
        </span>
        <span className="fas fa-lock" />
      </div>
    );
  } else {
    return (
      <div className="text-right">
        <span className="mr-2 text-success">Free to edit</span>
        <span className="fas fa-lock-open" />
      </div>
    );
  }
}

export default Locked;
