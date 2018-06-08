import React from "react";
import ArticleItem from "./articleItem";
import ListContent from "./listContent";

// Helper function to render a list
export const renderList = function(status, filterList) {
  const renderList = filterList.map(article => (
    <ArticleItem key={article.id} article={article} />
  ));

  return <ListContent status={status} renderList={renderList} />;
};
