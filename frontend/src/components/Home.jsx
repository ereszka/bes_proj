import React from 'react';
import TileMenu from "./TileMenu";
import '../styles/css/Home.css';
import SwitchButton from "./SwitchButton";

function Home() {
    return (
        <div className="container terra">

            <div className="row">
                <div className="col">
                <h1 className="main-title m-5">Terra Uno</h1>
                </div>
                <div className="col align-self-end offset-md-4">
                <SwitchButton/>
                </div>
            </div>

            <TileMenu/>

        </div>
    )
}

export default Home;

