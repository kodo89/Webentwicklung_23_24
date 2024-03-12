import React from "react";
import { useState } from "react";

export default function RandomJoke() {

  const [joke, setJoke] = useState("");

  function getRandomJoke() {
    fetch("http://localhost:3010/random")
      .then((res) => res.json())
      .then((data) => setJoke(data.jokeText));
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <button onClick={getRandomJoke}>Get Random Joke</button>
      <p>{joke}</p>
    </div>
  );
}
