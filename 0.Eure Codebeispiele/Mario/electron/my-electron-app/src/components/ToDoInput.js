import React from "react";
import { useState } from "react";





export default function ToDoInput(props){
    const [todoText, setToDoText] = useState("")

    return(
        <div>
            <span>New ToDo: </span>
            <input type="text" value={todoText} onChange={event => {
                setToDoText(event.target.value);
            }}></input>
            <button onClick={() => {
                props.onAddClicked && props.onAddClicked(todoText); // aufrufen einer Callback Funktion, zuerst wird überprüft ob die props.onAddClicked wirklich existiert (nicht null oder undefined) --> Wenn dies der Fall ist, wird die Funktion props.onAddClicked mit dem Argument todoText aufgerufen. Andernfalls wird nichts ausgeführt.
            }}>Add</button>
        </div>
    )
}











