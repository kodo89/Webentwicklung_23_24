import React from "react";
import Dice from "./Dice";
import "./styles.css";
import Header from "./Header";

export default function DiceGame() {
  //  let player1 = Math.ceil(Math.random() * 6);
  let player1 = Math.floor(Math.random() * 6+1);
  let player2 = Math.floor(Math.random() * 6+1);
  let winner = 0;

  if(player1 > player2){
    winner = 1;
  }
  if(player1 < player2){
    winner = 2;
  }


//   if(player1 > player2){
//     head.innerText = "Player 1 wins 🚩";
// } else if(player1 < player2){
//     head.innerText = "Player 2 wins 🚩";
// }else{
//     head.innerText = "It's Even 🚩";
// }

//Hier kommt dein Javascript Code um die Zufallszahlen und den Gewinner zu bestimmen
  return (
    <div className="container">
      {/* Hier kommt dein JSX Code um die Komponenten mit ihren benötigten Props einzubinden */}

      <Header winner = {winner}/>
      <Dice value = {player1} player={1}/>
      <Dice value = {player2} player={2}/>
  
    </div>
  );
}
