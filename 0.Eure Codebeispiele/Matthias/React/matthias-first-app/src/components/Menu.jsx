import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <div style={{display: "flex", flexDirection: "column", gap: "10px", alignItems: "center", justifyContent: "center", height: "100vh"}}>
      <Link to="/randomJoke">Random Joke</Link>
      <Link to="/specificJoke/1">Specific Joke 1</Link>
    </div>
  )
}
