import React, { useState } from "react";

const CharacterCounter = () => {
  const maxLength = 100;

  const [text, setText] = useState("");

  const handleChange = (e) => {
    const inputText = e.target.value;

    // Prevent typing more than max length
    if (inputText.length <= maxLength) {
      setText(inputText);
    }
  };
  return (
    <div
      style={{
        width: "300px",
        margin: "50px auto",
        textAlign: "center",
      }}
    >
      <h2>Live Character Counter</h2>

      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Type something..."
        rows="5"
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
        }}
      />

      <p>
        Characters: {text.length} / {maxLength}
      </p>
    </div>
  );
};

export default CharacterCounter;
