//Hier kommt deine Dice Komponente

import React from "react";

import image1 from "./images/dice1.png";
import image2 from "./images/dice2.png";
import image3 from "./images/dice3.png";
import image4 from "./images/dice4.png";
import image5 from "./images/dice5.png";
import image6 from "./images/dice6.png";

function Dice({val}) {
    let imageresult;
  switch (val) {
    case 1:
      imageresult= image1;
      break;
    case 2:
        imageresult= image2;
      break;
    case 3:
        imageresult = image3;
      break;
    case 4:
        imageresult = image4;
      break;
    case 5:
        imageresult = image5;
      break;
    case 6:
        imageresult = image6;
      break;
  }

  return <div class="dice">
  <img class="img1" src={imageresult}></img>
</div>
}

export default Dice;
