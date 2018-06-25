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
      bg = "";
  }

  return (
    <div className="pt-3 mb-2 border border-secondary border-white border-bottom-0 rounded">
      <div className="badge bg-secondary mx-2 p-2 float-right">
        Matérias: {props.populateList.length - props.senadoAgora.length}
      </div>
      <div className="badge bg-light text-secondary mx-2 p-2 float-right">
        Agora: {props.senadoAgora.length}
      </div>

      <h1 className="ml-2">
        {props.status}
        <span
          className={`badge ${bg} float-right text-light mr-2 animated rubberBand`}
        >
          {props.populateList.length}
        </span>
      </h1>

      <ul className="list-group mb-5">{props.populateList}</ul>
    </div>
  );
};

export default ListContent;
