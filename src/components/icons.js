import React from "react";

// Renders fontawesome icons inside article items

const IconList = ({ iconList }) => {
  return (
    <React.Fragment>
      {Object.keys(iconList)
        .filter(k => iconList[k] !== "")
        .map((k, i) => (
          <span key={i} className={`mr-2 text-secondary ${iconList[k]}`} />
        ))}
    </React.Fragment>
  );
};

export default IconList;
