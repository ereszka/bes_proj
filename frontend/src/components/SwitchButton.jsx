import React from 'react'
import {Button} from 'antd'

function SwitchButton({auto, changeState}) {

    function handleClick() {
        let param = "0";
        if(!auto){
            param = "1";
        }
        fetch('http://localhost:5284/Arduino/SetAuto/' + param, {method: "POST"}).then(changeState())
    }
    return (
    <div className='d-flex justify-content-evenly' style={{paddingRight: '0'}}>
        <Button
            onClick={handleClick}
            disabled={!auto}>
            Manual
        </Button>
        <Button
            onClick={handleClick}
            disabled={auto}>
            Auto
        </Button>     
    </div> )
}

export default SwitchButton;