import React, { useState } from "react";

const ShowHidepassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      <h2>Show / Hide Password</h2>

      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter Password"
        style={{
          padding: "10px",
          width: "250px",
          marginBottom: "15px",
          fontSize: "16px",
        }}
      />
      <button
        onClick={togglePassword}
        style={{
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        {showPassword ? "Hide Password" : "Show Password"}
      </button>
    </div>
  );
};

export default ShowHidepassword;
