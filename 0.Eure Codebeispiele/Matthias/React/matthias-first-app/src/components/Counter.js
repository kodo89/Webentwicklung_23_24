import React from "react";
import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Komponente wurde neu gerendert");
  });

  useEffect(() => {
    console.log("Komponente wurde das erste Mal gerendert");
  }, []);

  useEffect(() => {
    console.log("Counter: " + count);
  }, [count]);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div style={{ textAlign: "center", fontSize: "2rem" }}>
      {count}
      <br />
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
      <br />
      <button onClick={reset}>Reset</button>
    </div>
  );
}
