import React, {useState} from 'react'
import {Button} from 'antd'

function TileButton({isOn, id, auto}) {
    function handleClick() {
        let param = "0";
        if(!isOn){
            param = "1";
        }
        if(id === "lamp_hot"){
            fetch('http://localhost:5284/Arduino/SetLampHot/' + param, {method: "POST"}).then()
        }
        if(id === "lamp_cold"){
            fetch('http://localhost:5284/Arduino/SetLampCold/' + param, {method: "POST"}).then()
        }
        if(id === "lamp_uvb"){
            fetch('http://localhost:5284/Arduino/SetLampUVB/' + param, {method: "POST"}).then()
        }
        if(id === "winter"){
            fetch('http://localhost:5284/Arduino/SetWinter/' + param, {method: "POST"}).then()
        }
    }

    return(
        <Button
            onClick={handleClick}
            disabled={id === "winter" ? 0 : auto}>
            {isOn ? "Switch off" : "Switch on"}
        </Button>
    )
}

export default TileButton;