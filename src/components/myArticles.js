import React from "react";
import { renderList } from "./renderList";

const MyArticles = props => {
  const status = "Articles created by me";
  const myList = props.articles;
  return <div>{renderList(status, myList)}</div>;
};

export default MyArticles;
