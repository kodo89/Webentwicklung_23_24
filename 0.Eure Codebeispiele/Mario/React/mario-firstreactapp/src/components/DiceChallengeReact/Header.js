//Hier kommt deine Komponente für den Header Bsp: Spieler 1 hat gewonnen 🚩


import React from "react";


export default function Header(props){


    //let winner = props.varWinner;



    return (
        <div>
            <h1>{props.varWinner}</h1>
        </div>
    )
}


// <DiceCame.js>