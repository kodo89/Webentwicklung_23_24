//Hier kommt deine Dice Komponente

import React from 'react'
import image1 from "./images/dice1.png";
import image2 from "./images/dice2.png";
import image3 from "./images/dice3.png";
import image4 from "./images/dice4.png";
import image5 from "./images/dice5.png";
import image6 from "./images/dice6.png";


export default function Dice(props) {

    let src1;

    console.log(props)


    if(props.num === 1){
        src1 = image1
    } else if(props.num === 2){
        src1 = image2
    } else if(props.num === 3){
        src1 = image3
    } else if(props.num === 4){
        src1 = image4
    } else if(props.num === 5){
        src1 = image5
    } else {
        src1 = image6
    }

    let playerNo = props.player;

   

  return (
    <div className='dice'>
      <p>Player {playerNo}</p>
      <img className='img1' src={src1}/>
    </div>
  )
}


