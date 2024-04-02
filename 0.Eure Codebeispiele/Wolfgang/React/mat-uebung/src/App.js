
import "./App.css";
import BasicButtons from "./Button.js";
import BasicStack from "./Stack.js";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BasicStack spacing={2}>
        </BasicStack>

        <BasicButtons variant="text">Text</BasicButtons>
      </header>
    </div>
  );
}

export default App;
