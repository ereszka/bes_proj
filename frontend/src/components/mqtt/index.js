import React, { useEffect, useState } from 'react'
import TileMenu from "../TileMenu";

const HookMqtt = () => {
    const [payload, setPayload] = useState({})

    const httpConnect = () => {
        fetch('http://localhost:5284/Arduino/GetInfo', {method: "GET"})
            .then((response) => response.json()).then((json) => { setPayload(json.uplink_message.decoded_payload)})
    }

    useEffect(() => {
        httpConnect();
        const intervalId = setInterval(() => {
            httpConnect();
        }, 300000) // 5 min refresh
    }, [])

    return (
            <TileMenu payload={payload}/>
    )
}

export default HookMqtt