import React from "react";
import { renderList } from "./renderList";

const Locked = props => {
  console.log(props.articles);
  const articles = props.articles;
  const status = "Locked";

  return <div>{renderList(status, articles)}</div>;
};

export default Locked;
