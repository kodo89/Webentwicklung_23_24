//Hier kommt deine Dice Komponente
import React from "react";
import "./styles.css";
import dice1 from "./images/dice1.png";
import dice2 from "./images/dice2.png";
import dice3 from "./images/dice3.png";
import dice4 from "./images/dice4.png";
import dice5 from "./images/dice5.png";
import dice6 from "./images/dice6.png";


export default function Dice({value, player}){
    let result;
    if(value == 1){
        result = dice1;
    }
    else if(value == 2){
        result = dice2;
    }
    else if(value == 3){
        result = dice3;
    }
    else if(value == 4){
        result = dice4;
    }
    else if(value == 5){
        result = dice5;
    }
    else if(value == 6){
        result = dice6;
    }

    return(
        <>
        <div className = "dice">
        <p>Player {player}</p>
        <img className = "img" src = {result}/>

        </div>
        </>
    );
};