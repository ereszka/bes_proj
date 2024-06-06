import React, { useEffect, useState } from 'react'
import TileMenu from "../TileMenu";

const HookMqtt = () => {
    const [payload, setPayload] = useState({})
    const [queue, setQueue] = useState(0)

    const httpConnect = () => {
        fetch('http://localhost:5284/Arduino/GetInfo', { method: "GET" })
            .then((response) => {return response.json()}).then((json) => { setPayload(json.uplink_message.decoded_payload); });
        fetch('http://localhost:5284/Arduino/GetQueue', { method: "GET" })
            .then((response) => {return response.json()}).then((json) => {
                setQueue(response.length)
                console.log(response)});

    }

    function changeState() {
        let tmp = queue+1;
        setQueue(tmp);
    }

    useEffect(() => {
        httpConnect();
        const intervalId = setInterval(() => {
            httpConnect();
        }, 60000) // 3 min refresh
    }, [])

    return (
            <TileMenu payload={payload} queue={queue} changeState={changeState}/>
    )
}

export default HookMqtt