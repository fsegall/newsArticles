import React from "react";

// Renders a container for a list and its article items

const ListContent = props => {
  let articleStatus = props.status;
  console.log(props.populateList.length);
  let bg;

  switch (articleStatus) {
    case "Private":
      bg = "bg-danger";
      break;
    case "Not Reviewed":
      bg = "bg-warning";
      break;
    case "Reviewed":
      bg = "bg-success";
      break;
    case "Published":
      bg = "bg-primary";
      break;
    default:
      bg = "bg-secondary";
  }

  return (
    <div className="p-1">
      <div className="badge bg-secondary mb-2">
        Matérias: {props.populateList.length - props.senadoAgora.length}
      </div>
      <div className="badge bg-light text-secondary mb-2 ml-2">
        Agora: {props.senadoAgora.length}
      </div>
      <div className="border border-secondary border-white border-bottom-0 rounded">
        <h4 className="ml-2">
          {props.status}
          <span
            className={`badge ${bg} float-right text-light m-1 animated rubberBand`}
          >
            {props.populateList.length}
          </span>
        </h4>
        <div />
        <ul className="list-group">{props.populateList}</ul>
      </div>
    </div>
  );
};

export default ListContent;
