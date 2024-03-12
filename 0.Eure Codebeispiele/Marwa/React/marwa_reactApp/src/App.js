import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./components/Counter";
import Menu from "./components/Menu"
import RandomJoke from "./components/RandomJoke";
import SpecificJoke from "./components/SpecificJoke";


export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu/>}/>
        <Route path="counter" element={<Counter />}/>
        <Route path="randomjoke" element={<RandomJoke />}/>
        <Route path="specificjoke/:id" element={<SpecificJoke/>} />
      </Routes>
    </BrowserRouter>
  );
}

