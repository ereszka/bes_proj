import React from 'react'
import {Button} from 'antd'

function TileButton({isOn, id}) {

    function handleClick() {
        if(id === "lamp_hot"){
            fetch('http://localhost:5284/Arduino/SetLampHot/' + !isOn, {method: "POST"}).then()
        }
        if(id === "lamp_cold"){
            fetch('http://localhost:5284/Arduino/SetLampCold/' + !isOn, {method: "POST"}).then()
        }
        if(id === "lamp_uvb"){
            fetch('http://localhost:5284/Arduino/SetLampUVB/' + !isOn, {method: "POST"}).then()
        }
        if(id === "winter"){
            fetch('http://localhost:5284/Arduino/SetWinter/' + !isOn, {method: "POST"}).then()
        }
    }

    return(
        <Button
            onClick={handleClick}>
            {isOn ? "Switch off" : "Switch on"}
        </Button>
    )
}

export default TileButton;