//Hier kommt deine Dice Komponente

import React from "react";
import d1img from "./images/dice1.png";
import d2img from "./images/dice2.png";
import d3img from "./images/dice3.png";
import d4img from "./images/dice4.png";
import d5img from "./images/dice5.png";
import d6img from "./images/dice6.png";

let resultingImg = "";

export default function Dice({ val }) {

  switch (val) {
    case 1:
      resultingImg = d1img;
      break;
    case 2:
      resultingImg = d2img;
      break;
    case 3:
      resultingImg = d3img;
      break;
    case 4:
      resultingImg = d4img;
      break;
    case 5:
      resultingImg = d5img;
      break;
    case 6:
      resultingImg = d6img;
      break;
  }

  return (
    <div>
      <img className="dice" src={resultingImg} />
    </div>
  );
}
