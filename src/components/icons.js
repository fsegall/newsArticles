import React from "react";

const IconList = ({ iconList }) => {
  return (
    <React.Fragment>
      {Object.keys(iconList)
        .filter(k => iconList[k] !== "")
        .map((k, i) => (
          <span key={i} className={`mx-2 text-secondary ${iconList[k]}`} />
        ))}
    </React.Fragment>
  );
};

export default IconList;
