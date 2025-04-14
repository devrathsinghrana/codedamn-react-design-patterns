import React from "react";
import { useTheme } from "../provider/ThemeProvider";

const ContextComponent = () => {
  const contextValueObj = useTheme();
  return (
    <div>
      ContextComponent
      <p>{contextValueObj.mode}</p>
      <button onClick={() => contextValueObj.toggleTheme()}>
        Toggle theme
      </button>
    </div>
  );
};

export default ContextComponent;
