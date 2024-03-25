import logo from './logo.svg';
import './App.css';
import MyParentComponent from './components/MyParentComponent';
import DiceGame from './components/DiceChallengeReact/DiceGame';
import Counter from './components/Counter';
import Formular from './components/Formular';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './components/Menu';
import RandomJoke from './components/RandomJoke';
import SpecificJoke from './components/SpecificJoke';



function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu/>} />
        <Route path="randomJokeReact" element={<RandomJoke/>} />
        <Route path="specificjokeReact/:id" element={<SpecificJoke/>} />




      </Routes>
    </BrowserRouter>


   
    
  );
}





export default App;




 /*
    <div className="App">
    */

      {/*<Formular/>*/}

      /*<Counter/>*/
      
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
      <MyParentComponent /> */}
      /*
    </div>*/