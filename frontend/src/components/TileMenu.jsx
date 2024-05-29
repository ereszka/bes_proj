import React from "react";
import temp_img from '../assets/temperature.png';
import light_img from '../assets/lightbulb.png';
import hum_img from '../assets/humidity.png';
import winter_img from '../assets/wintermode.png';
import "../styles/css/Home.css";
import Tile from "./Tile";

function TileMenu() {

    // mockup data

    const devices = [
        {
            name : "Temperature A",
            data : "50",
            isSensor: 1,
            imgType : temp_img
        },
        {
            name : "Temperature B",
            data : "20",
            isSensor : 1,
            imgType : temp_img
        },
        {
            name : "Humidity A",
            data : "80",
            isSensor : 1,
            imgType: hum_img
        },
        {
            name : "Humidity B",
            data : "20",
            isSensor: 1,
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

        </div>
    )
}

export default TileMenu;

