import React from "react";

function DiceButton({onRollDice}) {
    const rollDice = () => {
        console.log("kushini pechochiniiiii");
        onRollDice()
    };

    const buttonStyle = {
        backgroundColor: "black",
        color: "white",
        padding: "10px 20px",
        fontSize: "16px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        transition: "background 0.3s",
    };

    return (
        <>
            <button style={buttonStyle} onClick={rollDice}>
                Tirar
            </button>
        </>
    );
}

export default DiceButton;


