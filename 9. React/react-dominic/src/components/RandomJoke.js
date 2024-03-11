import React, { useEffect, useState } from "react";

export default function RandomJoke() {
  const [joke, setJoke] = useState("")
  function myFetchFunction() {
    fetch("http://localhost:3000/random")
      .then((response) => response.json())
      .then((data) => setJoke(data.jokeText));
  }

  return (
    <div>
      <button onClick={myFetchFunction}>Neuen Witz anzeigen</button>
      <br/>
      {joke}
    </div>
  );
}
