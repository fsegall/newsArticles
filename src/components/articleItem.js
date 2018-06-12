import React from "react";
import Icons from "./icons";

function ArticleItem(props) {
  const article = props.article;

  return (
    <li className="list-group-item list-group-item-action">
      <Icons iconList={article.icons} />
      <span className="badge badge-primary float-right">
        {article.publishDate}
      </span>
      <div>{article.headline}</div>
      <div className="mt-1">{`Escrita por: ${article.author}`}</div>
    </li>
  );
}

export default ArticleItem;
