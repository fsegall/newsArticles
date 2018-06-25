import React from "react";
import { renderList } from "./renderList";

// Secondary My Articles page - Will render a list of articles created by the current user

const MyArticles = props => {
  const status = "My Articles";
  const myList = props.articles;
  return <div>{renderList(status, myList)}</div>;
};

export default MyArticles;
