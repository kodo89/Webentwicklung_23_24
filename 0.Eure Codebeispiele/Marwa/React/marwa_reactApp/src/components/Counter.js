import React, { useEffect } from 'react'
import { useState } from 'react';


export default function Counter(){
    const [count, setCount] = useState(0);

    useEffect(() => {
      console.log('Komponente wurde neu gerendert');
    });
  
    useEffect(() => {
      console.log('Komponente wurde zum ersten Mal neu gemountet');
    }, []);

    useEffect(() => {
      console.log('Count:', count);
    }, [count]);
  
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Increment</button>
      </div>
    );
}
