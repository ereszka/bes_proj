import React from "react";
import temp_img from '../assets/temperature.png';
import light_img from '../assets/lightbulb.png';
import "../styles/css/Home.css";
import Tile from "./Tile";

function TileMenu() {

    const t_sensors = ["tempA", "tempB"];
    const h_sensors = ["humA", "humB"];
    const lamps= ["lampA", "lampB", "lampUVB"];

    return (
        <div className="container">
            <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                {t_sensors.map((sensor) => (
                    <Tile
                        name={sensor}
                        data={10}
                        isSensor={1}/>
                ))}
                {h_sensors.map((sensor) => (
                    <Tile
                        name={sensor}
                        data={50}
                        isSensor={1}
                    />
                ))}
            </div>

        <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
            {lamps.map((lamp) => (
                <Tile
                    name={lamp}
                    data={"On"}
                    isSensor={0}/>
            ))}
        </div>
        </div>
    )
}

export default TileMenu;