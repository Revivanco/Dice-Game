import React from "react";

function DiceButton() {
    let diceSide = 2;

    const pruebas = () => {
        console.log("kushini pechochiniiiii");
        diceSide += 1;
        console.log(diceSide);
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
            <button style={buttonStyle} onClick={pruebas}>
                Tirar
            </button>
            {diceSide}
        </>
    );
}

export default DiceButton;


