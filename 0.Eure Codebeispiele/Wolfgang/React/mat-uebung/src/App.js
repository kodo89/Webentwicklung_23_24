
import { Checkbox } from "@mui/material";
import "./App.css";
import BasicButtons from "./Button.js";
import Checkboxes from "./Checkbox.js";
import BasicStack from "./Stack.js";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BasicStack spacing={2}>
        </BasicStack>

        <BasicButtons variant="text">Text</BasicButtons>
      </header>

      <Checkbox/>
      <Checkbox/><Checkbox/><Checkbox/><Checkbox/><Checkbox/><Checkbox/>
        
            </div>
  );
}

export default App;
