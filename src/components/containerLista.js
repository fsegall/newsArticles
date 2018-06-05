import React from "react";

function ContainerLista(props) {
  console.log(props);
  return (
    <div className="pt-3 mb-2 border border-secondary border-white border-bottom-0">
      <h1>{props.status}</h1>
      <ul className="list-group mb-5">{props.renderList}</ul>
    </div>
  );
}

export default ContainerLista;
