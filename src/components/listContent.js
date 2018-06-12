import React from "react";

function ListContent(props) {
  return (
    <div className="pt-3 mb-2 border border-secondary border-white border-bottom-0">
      <h1 className="ml-2">{props.status}</h1>

      <ul className="list-group mb-5">{props.renderList}</ul>
    </div>
  );
}

export default ListContent;
