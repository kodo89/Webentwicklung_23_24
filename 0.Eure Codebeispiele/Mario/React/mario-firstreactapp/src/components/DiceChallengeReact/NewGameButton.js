import React from "react";



export default function NewGameButton(props) {

    

    function handleNewGame(){
        props.setNumber1(Math.floor(Math.random()*6+1))
        props.setNumber2(Math.floor(Math.random()*6+1))
    }


    return(
        <div>
            <button className='buttonDice' onClick={handleNewGame}>New Game!</button>
        </div>
    )
}