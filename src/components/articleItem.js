import React from "react";
import Icons from "./icons";
import Locked from "./locked";

function ArticleItem(props) {
  const article = props.article;

  return (
    <li className="list-group-item list-group-item-action">
      <Icons iconList={article.icons} />
      <span className="badge badge-primary float-right">
        {article.publishDate}
      </span>
      <div className="m-2">{article.headline}</div>
      <strong className="ml-2">{`Escrita por: ${article.author}`}</strong>
      <Locked locked={article.Locked} />
    </li>
  );
}

export default ArticleItem;
