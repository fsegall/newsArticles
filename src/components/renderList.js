import React from "react";
import ArticleItem from "./articleItem";
import ListContent from "./listContent";

// Helper function to render a list of article items
export const renderList = (status, filterList) => {
  const renderListData = filterList.map(article => (
    <ArticleItem key={article.id} article={article} />
  ));

  return (
    <ListContent
      status={status}
      populateList={
        renderListData
      } /* Populates listContent's <ul> with <li> article items */
    />
  );
};
