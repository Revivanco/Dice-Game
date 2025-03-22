import React from "react"


const DiceComponent = () => {
    return (
        <>
            <div className="dice first-face">
                <span className="dot">
                </span>
            </div>

            <div className="dice second-face">
                <span className="dot">
                </span>
                <span className="dot">
                </span>
            </div>

            <div className="dice third-face">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>

            <div className="fourth-face dice">
                <div className="column">
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
                <div className="column">
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            </div>
            <div className="fifth-face dice">

                <div className="column">
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>

                <div className="column">
                    <span className="dot"></span>
                </div>

                <div className="column">
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>

            </div>
            <div className="sixth-face dice">
                <div className="column">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
                <div className="column">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>

            </div>
        </>
    )
}

export default DiceComponent