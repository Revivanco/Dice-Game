import React, { useState } from "react";
import DiceComponent from "./component/DiceComponent";
import "./App.css"
import DiceButton from "./component/DiceButton";



function tirarDado() {
  return Math.floor(Math.random() * 6) + 1;
}

function App() {
  const [diceSide, setDiceSide] = useState(tirarDado())
  let alternativeDiceSide = 4
  const pruebas = () => {
    setDiceSide(tirarDado())
    alternativeDiceSide = 3
    console.log(alternativeDiceSide)
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
