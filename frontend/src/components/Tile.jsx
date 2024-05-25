import React from 'react';
import temp_img from '../assets/temperature.png';
import light_img from '../assets/lightbulb.png';
import LampButton from "./LampButton";

function Tile({name, data, isSensor}) {
    return(
        <div className="col-3">
            <div className="card border-0 tile">
                <img src={temp_img} className="card-img-top" alt="..."/>
                <div className="card-body light-div">
                    <h5 className="card-title">Output: {data}</h5>
                    <p className="card-text">Device: {name}</p>
                    {isSensor ? "" : <LampButton/>}
                </div>
            </div>
        </div>
    )
}

export default Tile;