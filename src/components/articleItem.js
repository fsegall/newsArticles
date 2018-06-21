import React from "react";
import Icons from "./icons";
import LockedIcon from "./lockedIcon";

function ArticleItem(props) {
  const article = props.article;
  const classAnimated = article.publishDate
    ? "badge badge-primary float-right animated slideInRight"
    : "";

  return (
    <li className="list-group-item list-group-item-action">
      <Icons iconList={article.icons} />
      <span className={classAnimated}>
        <span className="">{article.publishDate}</span>
      </span>
      <div className="m-2">
        <a>{article.headline}</a>
      </div>
      <strong className="ml-2">{`Escrita por: ${article.author}`}</strong>
      <LockedIcon locked={article.locker.locked} user={article.locker.user} />
    </li>
  );
}

export default ArticleItem;
