import React from "react";


function DiceButton() {
    let diceSide = 2
    const pruebas  = () => {
        console.log("kushini pechochiniiiii")
        diceSide += 1
        console.log(diceSide)
    }
    return (
        <>
        <button onClick={pruebas}>Tirar</button>
        {diceSide}
        </>
    );
  }
  
  export default DiceButton


  