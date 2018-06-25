import React from "react";

const StatusBox = props => {
  const statusClass = props.statusClass;
  return (
    <div
      className={
        !props.hidden
          ? `${statusClass} box-animation p-2`
          : `${statusClass} box px-5`
      }
    >
      <div className={!props.hidden ? "fade" : "d-none"}>
        <p className="bg-light text-secondary rounded">{props.statusStage}</p>
        <div className="bg-light rounded-circle p-1 text-secondary rad m-auto">
          {props.count}
        </div>
      </div>
    </div>
  );
};

export default StatusBox;
