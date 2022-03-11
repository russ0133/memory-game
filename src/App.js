import { useState } from "react";
import "./App.css";
import Game from "./components/Game";

function App() {
  let [score, setScore] = useState(0);
  return (
    <div className="App">
      <Game />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}

export default App;
