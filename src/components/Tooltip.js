import React, { useState } from "react";
import ReactDom from "react-dom";

const Tooltip = ({ text, children }) => {
  let [isHovered, setisHovered] = useState(false);
  return (
    <div>
      {isHovered && <p className="tooltiptext">{text}</p>}
      <h1
        className="tooltip"
        onMouseOver={() => setisHovered(true)}
        onMouseLeave={() => setisHovered(false)}
      >
        {children}
      </h1>
    </div>
  );
};
export default Tooltip;
