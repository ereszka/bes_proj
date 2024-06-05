import React from 'react'
import {Button} from 'antd'

function SwitchButton({auto}) {

    function handleClick() {
        fetch('http://localhost:5284/Arduino/SetAuto/' + !auto, {method: "POST"}).then()
    }
    return (
    <div className='d-flex justify-content-evenly' style={{width: '22%'}}>
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