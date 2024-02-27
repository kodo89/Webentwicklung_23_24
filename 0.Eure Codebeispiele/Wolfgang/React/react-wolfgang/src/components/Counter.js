
import React, { useState } from 'react'


function Counter() {
    const [count, setCount] = useState(0);
 

    function handleClick(){
        setCount(count+1)
    }
    function handleClick2(){
        setCount(count-1)
    }
  return (

    <>
    <div style={{color:"White"}}>{count}</div>
    <button onClick={handleClick}>+</button>
    <button onClick={handleClick2}>-</button>
    </>
  )
}

export default Counter