import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function SpecificJoke() {
  const { id } = useParams();
  const [joke, setJoke] = useState("");
  useEffect(() => {
    fetch(`/jokes/${id}`)
      .then((res) => res.json())
      .then((data) => setJoke(data.jokeText));
  }, []);

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
      <p>{joke}</p>
    </div>
  );
}
