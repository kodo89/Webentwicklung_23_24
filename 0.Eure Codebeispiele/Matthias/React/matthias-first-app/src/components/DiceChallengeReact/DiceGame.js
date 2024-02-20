import React from "react";
import "./styles.css";
import Header from "./Header";
import Dice from "./Dice";

export default function DiceGame() {
  //Hier kommt dein Javascript Code um die Zufallszahlen und den Gewinner zu bestimmen
  const player1 = Math.floor(Math.random() * 6) + 1;
  const player2 = Math.floor(Math.random() * 6) + 1;

  let winner;

  if (player1 > player2) {
    winner = "Player 1";
  } else if (player2 > player1) {
    winner = "Player 2";
  } else {
    winner = "";
  }

  let headerString = winner + " wins!";

  if (winner === "") {
    headerString = "Par!";
  }

  return (
    <div className="container">
      <Header headerString={headerString} />
      <div className="dice-container">
        <div>
          <p>Player 1</p>
          <Dice val={player1} />
        </div>
        <div>
          <p>Player 2</p>
          <Dice val={player2} />
        </div>
      </div>
    </div>
  );
}
