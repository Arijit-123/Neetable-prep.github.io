import React, { useState } from "react";
import "./Toggle.css";

export default function Toggle() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className="area">
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="container">
        <span style={{ color: darkMode ? "grey" : "yellow" }}>light</span>
        <div className="switch-checkbox">
          <label className="switch">
            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
            <span className="slider round"> </span>
          </label>
        </div>
        <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>dark</span>
      </div>
      <div>
        
      </div>
    </div>
    </div>
  );
}
