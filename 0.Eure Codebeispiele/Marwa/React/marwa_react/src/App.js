import logo from './logo.svg';
import './App.css';
import MyParentComponent from './components/MyParentComponent';
import DiceGame from './components/DiceChallengeReact/DiceGame';
import Counter from './components/Counter';
import NewGameButton from './components/DiceChallengeReact/NewGameButton';

function App() {
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

      <NewGameButton/>
    </div>
  );
}



export default App;
