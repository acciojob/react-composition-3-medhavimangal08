import React, { useState } from "react";
import ReactDOM from "react-dom";
const Tooltip = ({ text, children }) => {
  let [isHovered, setisHovered] = useState(false);
  return (
    <div
      className="tooltip"
      onMouseEnter={() => setisHovered(true)}
      onMouseLeave={() => setisHovered(false)}
    >
      {isHovered && <div>{text}</div>}
      {children}
    </div>
  );
};
export default Tooltip;
