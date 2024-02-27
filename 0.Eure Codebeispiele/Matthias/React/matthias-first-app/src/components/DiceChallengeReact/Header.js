//Hier kommt deine Komponente für den Header Bsp: Spieler 1 hat gewonnen 🚩

  import React from 'react'
  
  export default function Header({headerString}) {
    return (
      <div><h1>{headerString}</h1></div>
    )
  }
  