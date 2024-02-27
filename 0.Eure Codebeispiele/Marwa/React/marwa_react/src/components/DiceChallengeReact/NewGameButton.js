import React from 'react'
import { useState } from 'react'


function NewGameButton(props){

    function handleClick(){
        setDice1(newDice1)
        setDice2(newDice2)
      }

        function newGame(){
            props.setDice1(Math.floor(Math.random() * 6+1));
            props.setDice2(Math.floor(Math.random() * 6+1));
        }

    return(
            <button onClick={newGame}>New Game</button>

    )

}

export default NewGameButton


