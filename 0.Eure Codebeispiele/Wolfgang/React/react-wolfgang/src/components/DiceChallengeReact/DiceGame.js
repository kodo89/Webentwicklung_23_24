import React from "react";
import "./styles.css";
import Dice from "./Dice";



export default function DiceGame() {
//Hier kommt dein Javascript Code um die Zufallszahlen und den Gewinner zu bestimmen

let würfel1 = (Math.floor(Math.random() * 6) +1);

let würfel2 = (Math.floor(Math.random() * 6) +1);


let winner = "";


if(würfel1 < würfel2) {

 winner = "Player 2 Wins"
}if (würfel1>würfel2){
  winner = "Player 1 Wins"
}if (würfel1==würfel2)
{
  winner = "UNENTSCHIEDEN"
}
  return (

    <div className="container">
      {/* Hier kommt dein JSX Code um die Komponenten mit ihren benötigten Props einzubinden */
      
      <h1>
        {winner} 
      </h1>
      } 
      <div style={{display:"flex", justifyContent:"center"}}>  

      <p>Player 1</p>
      
<Dice val = {würfel1} />


<p>Player 2</p>
<Dice val = {würfel2}/>

<button style={{backgroundColor:"Blue"}}>New Game Button</button>

</div>
    </div>
  );
}
