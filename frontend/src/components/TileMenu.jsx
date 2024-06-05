import React, {useEffect, useState} from "react";
import temp_img from '../assets/temperature.png';
import light_img from '../assets/lightbulb.png';
import hum_img from '../assets/humidity.png';
import winter_img from '../assets/wintermode.png';
import "../styles/css/Home.css";
import Tile from "./Tile";
import SwitchButton from "./SwitchButton";

function TileMenu({payload}) {

    const devices = [
        {
            name : "Temperature (Hot Area)",
            data : payload.Temp_HOT + " °C",
            isSensor: 1,
            imgType : temp_img,
            id: "temp_hot"
        },
        {
            name : "Temperature (Cold Area)",
            data : payload.Temp_COLD + " °C",
            isSensor : 1,
            imgType : temp_img,
            id: "temp_cold"
        },
        {
            name : "Humidity (Hot Area)",
            data : payload.Hum_HOT + " %",
            isSensor : 1,
            imgType: hum_img,
            id: "hum_hot"
        },
        {
            name : "Humidity (Cold Area)",
            data : payload.Hum_HOT + " %",
            isSensor : 1,
            imgType: hum_img,
            id: "hum_cold"
        },
        {
            name : "Lamp (Hot Area)",
            data: payload.Lamp_HOT ,
            isSensor: 0,
            imgType: light_img,
            id: "lamp_hot"
        },
        {
            name: "Lamp (Cold Area)",
            data: payload.Lamp_COLD,
            isSensor: 0,
            imgType: light_img,
            id: "lamp_cold"
        },
        {
            name : "Lamp UVB",
            data : payload.Lamp_UVB,
            isSensor: 0,
            imgType: light_img,
            id: "lamp_uvb"
        },
        {
            name : "Winter mode",
            data : payload.Mode_WINTER,
            isSensor : 0,
            imgType : winter_img,
            id: "winter"
        }
    ]

    return (
        <div className="container">
            <div className="row row-cols-lg-4 g-1 g-lg-3">
                {devices.map((device) => (
                    <Tile
                        device={device}/>
                ))}

            </div>

            <div className="row row-cols-lg-5 switch">
                <SwitchButton auto={payload.Mode_AUTO}/>
            </div>

        </div>
    )
}

export default TileMenu;

