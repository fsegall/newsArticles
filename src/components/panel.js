import React from "react";

function Panel(props) {
  
  return (
    <div className="container-fluid">
      <h1>News Workflow</h1>
      <div>{props.children}</div>
    </div>
  );
}

export default Panel;
