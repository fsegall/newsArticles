import React from "react";

// Renders a container for a list and its article items

const ListContent = props => {
  console.log(props.renderList);
  return (
    <div className="pt-3 mb-2 border border-secondary border-white border-bottom-0 rounded">
      <h1 className="ml-2">{props.status}</h1>

      <ul className="list-group mb-5">{props.populateList}</ul>
    </div>
  );
};

export default ListContent;
