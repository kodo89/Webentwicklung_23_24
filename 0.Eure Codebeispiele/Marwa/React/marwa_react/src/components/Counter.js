import React from 'react'
import { useState } from 'react';


function Counter(){
    const [count, setCount] = useState(0)
    function handleIncrement(){
        setCount(count+1);
        console.log("Count: ",count);
    }
    function minus(){
    setCount(count-1);
    console.log("Count: ",count);
}

    return(
        <div style={{color: "white"}}>
            {count}
            <button onClick={handleIncrement}><h2> + </h2> </button>
            <button onClick={minus}><h2> - </h2> </button>
        </div>
 
 
    )
}

export default Counter