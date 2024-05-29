import React from 'react'

function LampButton(isOn) {
    return(
        <a href="#" className="btn btn-outline-dark">
            {isOn.isOn === "On" ? "Switch off" : "Switch on"}
        </a>
    )
}

export default LampButton;