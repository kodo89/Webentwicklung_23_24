
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function Counter(){
    const [count, setCount] = useState(0)
    //const [count, setCountNew] = useState(0)


    function handleIncrement(){
        setCount(count+1)
        // count++;
        // console.log("Count: "+count);
    }

    function handleDecrement(){
        setCount(count-1)
    }

    function handleReset(){
        setCount(0)
    }


    /*
Jedes mal wenn die Komponente neu gerendert wird gib den Text „Komponente wurde neu gerendert“ in der Konsole aus
Jedes Mal wenn die Komponente gemountet wird (zum ersten mal gerendert) gib den Text „Komponente wurde gemountet“ in der Konsole aus
Jedes Mal wenn sich der Zustand des Counters ändert, gib den Text „Counter: “ + Wert des Zustands in der Konsole aus
    */

    useEffect(() => {
        console.log("Komponente wurde neu gerendert")
    });


    useEffect(() => {
        console.log("Komponente wurde gemountet")
    },[]);

    useEffect(() => {
        console.log("Counter: " + count)
    },[handleIncrement, handleDecrement, handleReset]);



    return(
        <>
        <div>
            {count + " "}
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleReset}>Reset</button>
        </div>
        </>
    )
}