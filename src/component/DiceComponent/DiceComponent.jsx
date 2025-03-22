import React from "react"


const DiceComponent = ({number}) => {
    console.log(number)
    if (number === 1) {
        return (
            <>
                <div className="dice first-face">
                    <span className="dot">
                    </span>
                </div>
            </>
        )
    }
    if (number === 2) {
        return (
            <>
                <div className="dice second-face">
                    <span className="dot">
                    </span>
                    <span className="dot">
                    </span>
                </div>
            </>
        )
    }
    if (number === 3) {
        return (
            <>
                <div className="dice third-face">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            </>
        )
    }
    if (number === 4) {
        return (
            <>
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
            </>
        )
    }
    if (number === 5) {
        return (
            <>

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
            </>
        )
    }
    if (number === 6) {
        return (
            <>
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
}

export default DiceComponent