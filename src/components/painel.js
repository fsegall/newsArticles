import React from "react";

function Painel(props) {
  console.log(props);
  return (
    <div>
      <h1>Fluxo das Notícias</h1>
      <div>{props.children}</div>
    </div>
  );
}

export default Painel;
