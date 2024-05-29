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
            </div>

            <TileMenu/>

            <div className="row row-cols-lg-5 switch">
                <SwitchButton/>
            </div>

        </div>
    )
}

export default Home;

