import React, { useState } from "react";
import DiceComponent from "./component/DiceComponent";
import "./App.css";
import DiceButton from "./component/DiceButton";

function tirarDado() {
  return Math.floor(Math.random() * 6) + 1;
}

function App() {
  const [dices, setDices] = useState([tirarDado()]); 


  const rollDice = () => {
    setDices(dices.map(() => tirarDado())); 
  };

  const duplicateDice = () => {
    setDices([...dices, tirarDado()]); 
  };

  return (
    <div>
      <div style={{ display: "flex", gap: "10px" }}>
        {dices.map((number, index) => (
          <DiceComponent key={index} number={number} />
        ))}
      </div>

      <DiceButton onRollDice={rollDice} />

      <button onClick={duplicateDice}>Duplicar Dado</button>
    </div>
  );
}

export default App;

