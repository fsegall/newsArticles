import React from "react";
import Icons from "./icons";
import LockedIcon from "./lockedIcon";

//Renders dynamic content of each article item

const ArticleItem = props => {
  const article = props.article;
  const classAnimated = article.publishDate
    ? "badge badge-primary float-right animated slideInRight"
    : "";

  return (
    <li className="list-group-item list-group-item-action">
      <Icons iconList={article.icons} />
      <div className="m-2">
        <div className={classAnimated}>
          <span className="">{article.publishDate}</span>
        </div>
        <div className="pt-4">
          <a>{article.headline}</a>
        </div>
      </div>
      <strong className="ml-2">{`Written by: ${article.author}`}</strong>
      <LockedIcon locked={article.locker.locked} user={article.locker.user} />
    </li>
  );
};

export default ArticleItem;
