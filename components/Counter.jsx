import React, { useState } from "react";

const counter = () => {
  const [count, setCount] = useState(0);

  // Increment Function
  const increment = () => {
    setCount(count + 1);
  };

  // Decrement Function
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // Reset Function
  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Counter App</h1>

        <h2>{count}</h2>

        <button onClick={increment} style={{ margin: "10px" }}>
          Increment
        </button>

        <button onClick={decrement} style={{ margin: "10px" }}>
          Decrement
        </button>

        <button onClick={reset} style={{ margin: "10px" }}>
          Reset
        </button>
      </div>
    </>
  );
};

export default counter;
