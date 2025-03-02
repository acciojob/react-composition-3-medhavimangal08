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
      {isHovered && (
        <div>
          <h2>{text}</h2>
        </div>
      )}
      <p>{children}</p>
    </div>
  );
};
export default Tooltip;
