import React, {useEffect, useState} from "react";
import temp_img from '../assets/temperature.png';
import light_img from '../assets/lightbulb.png';
import hum_img from '../assets/humidity.png';
import winter_img from '../assets/wintermode.png';
import "../styles/css/Home.css";
import Tile from "./Tile";
import SwitchButton from "./SwitchButton";
import {List} from "antd";

function TileMenu({payload}) {

    const [messages, setMessages] = useState([])

    useEffect(() => {
        if (payload.topic) {
            setMessages(messages => [...messages, payload])
        }
    }, [payload])

    const renderListItem = (item) => (
        <List.Item>
            <List.Item.Meta
                title={item.topic}
                description={item.message}
            />
        </List.Item>
    )

    // mockup data

    const devices = [
        {
            name : "Temperature",
            data : renderListItem,
            isSensor: 1,
            imgType : temp_img
        },
        // {
        //     name : "Temperature B",
        //     data : "20",
        //     isSensor : 1,
        //     imgType : temp_img
        // },
        {
            name : "Humidity",
            data : renderListItem,
            isSensor : 1,
            imgType: hum_img
        },
        {
            name : "Lamp A",
            data: "On",
            isSensor: 0,
            imgType: light_img
        },
        {
            name : "Lamp B",
            data : "Off",
            isSensor: 0,
            imgType: light_img
        },
        {
            name : "Lamp UVB",
            data : "Off",
            isSensor: 0,
            imgType: light_img
        }
    ]

    return (
        <div className="container">
            <div className="row row-cols-lg-4 g-1 g-lg-3">
                {devices.map((device) => (
                    <Tile
                        device={device}/>
                ))}

                <Tile
                    device = {{
                    name : "Winter mode",
                    data : "On",
                    isSensor : 0,
                    imgType : winter_img
                    }}
                />

            </div>

            <div className="row row-cols-lg-5 switch">
                <SwitchButton/>
            </div>

        </div>
    )
}

export default TileMenu;

