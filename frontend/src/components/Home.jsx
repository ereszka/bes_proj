import React from 'react';
import '../styles/css/Home.css';
import HookMqtt from "./mqtt";

function Home() {

    return (
        <div className="container terra">

            <div className="row">
                <div className="col">
                <h1 className="main-title m-5">Terra Uno</h1>
                </div>
            </div>

            <HookMqtt/>

        </div>
    )
}

export default Home;

