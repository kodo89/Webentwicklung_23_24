
import React from "react";
import { useState } from "react";

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