import React from "react";

const Authors = props => {
  console.log(props.articles);
  return <div>Author: {`The author is ${props.articles[0].author}`}</div>;
};

export default Authors;
