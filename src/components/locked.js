import React from "react";
import { renderList } from "./renderList";

// Secondary Locked page - Renders a list of locked articles being edited by any user

const Locked = props => {
  console.log(props.articles);
  const articles = props.articles;
  const status = "Locked";

  return <div>{renderList(status, articles)}</div>;
};

export default Locked;
