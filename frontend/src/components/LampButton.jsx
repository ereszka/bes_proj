import React from 'react'
import {Button} from 'antd'

function LampButton({isOn}) {

    const onClick = () => {
        console.log("Publisher TODO") // TODO
    }

    return(
        <Button
            onClick={onClick}>
            {isOn ? "Switch off" : "Switch on"}
        </Button>
    )
}

export default LampButton;