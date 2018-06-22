import React from "react";
import { renderList } from "./renderList";
import StaffCard from "./staffCard";

// Secondary Staff page - Renders user cards

const Staff = props => {
  const renderCards = props.articles.map(article => (
    <StaffCard key={article.id} article={article} />
  ));
  return (
    <div className="container d-flex justify-content-between flex-wrap">
      {renderCards}
    </div>
  );
};

export default Staff;
