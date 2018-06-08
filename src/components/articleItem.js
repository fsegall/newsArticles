import React from "react";

function ArticleItem(props) {
  const article = props.article;
  return (
    <li className="list-group-item list-group-item-action">
      <span className="badge badge-primary w-100">
        {article.publishDate}
      </span>
      <div>{article.headline}</div>
      <div>{`Escrita por: ${article.author}`}</div>
    </li>
  );
}

export default ArticleItem;
