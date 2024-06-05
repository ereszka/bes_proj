import React from 'react';
import LampButton from "./LampButton";

function tile({device}) {

    return(
        <div className="col-3">
            <div className="card border-0 tile">
                <img src={device.imgType} className="card-img-top" alt="..."/>
                <div className="card-body light-div">
                    <p className="card-text">{device.name}</p>
                    {device.isSensor ? 
                    <h5 className="card-title">Output : {device.data}</h5> :
                    <h5 className="card-title">State : {device.data ? "On" : "Off"}</h5>
                    }
                    {device.isSensor ? "" : <LampButton isOn={device.data}/>}
                </div>
            </div>
        </div>
    )
}

export default tile;