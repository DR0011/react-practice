import React, { useState } from "react";

function ModeButton() {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle Theme
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#1a1a1a" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        transition: "0.3s ease",
      }}
    >
      <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>

      <button
        onClick={toggleTheme}
        style={{
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          backgroundColor: darkMode ? "#ffffff" : "#000000",
          color: darkMode ? "#000000" : "#ffffff",
        }}
      >
        Switch Theme
      </button>
    </div>
  );
}

export default ModeButton;
