import logo from './logo.svg';
import './App.css';
import MyParentComponent from './components/MyParentComponent';
import DiceGame from './components/DiceChallengeReact/DiceGame';
import Counter from './components/Counter';
import NewGameButton from './components/DiceChallengeReact/NewGameButton';
import Formulare from './components/Formulare';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";


export default function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <MyParentComponent />  */}

      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>


      <Counter/>
    </div>
  );
}

