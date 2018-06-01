import React from "react";

function Painel(props) {
  console.log(props);
  return (
    <div>
      <h1>My React App!</h1>
      <div>{props.children}</div>
    </div>
  );
}

export default Painel;
