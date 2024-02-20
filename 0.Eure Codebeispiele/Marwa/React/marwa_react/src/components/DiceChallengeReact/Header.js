//Hier kommt deine Komponente für den Header Bsp: Spieler 1 hat gewonnen 🚩

import React from 'react';

export default function Header({winner}) {

    let text;

    if(winner === 1){
        text = "Player 1 wins 🚩";
    } 
    else if(winner === 2){
       text = "Player 2 wins 🚩";
    }
    else{
       text = "It's Even 🚩";
    }
  
    return (
    <h1>
        {text}
    </h1>
  )
}
