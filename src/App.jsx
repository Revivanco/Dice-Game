import React, { useState } from "react";
import DiceComponent from "./component/DiceComponent";
import "./App.css"
import DiceButton from "./component/DiceButton";


function App() {
  const [diceSide, setDiceSide] = useState(3)
  const pruebas = () =>{
    setDiceSide(5)
  }
  return (
    <div>
      <DiceComponent number={diceSide} />
      <DiceButton />
      <button onClick={pruebas}>otro boton</button>
    </div>
  );
}

export default App;
