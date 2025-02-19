import React from "react";
import "./../styles/App.css";
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}
      <Tooltip text="This is a tooltip" children="Hover over me"></Tooltip>
      <Tooltip
        text="This is another tooltip"
        children="Hover over me to see second tooltip"
      ></Tooltip>
    </div>
  );
};

export default App;
