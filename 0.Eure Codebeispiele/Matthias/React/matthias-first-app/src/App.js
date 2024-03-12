import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu";
import RandomJoke from "./components/RandomJoke";
import SpecificJoke from "./components/SpecificJoke";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/menu" element={<Menu />} />
        <Route path="/randomJoke" element={<RandomJoke />} />
        <Route path="/specificJoke/:id" element={<SpecificJoke />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
