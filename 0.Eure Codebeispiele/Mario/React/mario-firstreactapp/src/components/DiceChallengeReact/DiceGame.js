import React from "react";
import "./styles.css";
import Dice from "./Dice";
import Header from "./Header";

export default function DiceGame() {

  var number1 = Math.floor(Math.random()*6+1);
  var number2 = Math.floor(Math.random()*6+1);

  let varWinner = " ";

  console.log(number1);
  console.log(number2);



  // if(number1 > number2){
  //   varWinner = 1;
  // } else if(number1 < number2){
  //   varWinner = 2;
  // } else{
  //   varWinner = 0;
  // }


  if(number1 > number2){
    varWinner = "Player 1 Wins!🚩";
  } else if(number1 < number2){
    varWinner = "Player 2 Wins!🚩";
  } else{
    varWinner = "The score is even!🚩";
  }

  console.log(varWinner);





//Hier kommt dein Javascript Code um die Zufallszahlen und den Gewinner zu bestimmen
  return (
    <div className="container">
      <Header
        varWinner = {varWinner}
      />
      <Dice
        player = {1}
        num = {number1}
      />
      <Dice
        player = {2}
        num = {number2}
      />
      
      {/* Hier kommt dein JSX Code um die Komponenten mit ihren benötigten Props einzubinden */}
    </div>
  );
}
