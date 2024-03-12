import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SpecificJoke() {
  const [joke, setJoke] = useState("")
  const { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:3000/specificjokeReact/"+id)
      .then((response) => response.json())
      .then((data) => setJoke(data.jokeText))},[]
  );
  console.log(joke)
  return <div>{joke}</div>;
}

