//@ts-check

import React from "react";
import { Link } from "react-router-dom";
import Mantras from "./Mantras";
import Sounds from "./Sounds";

const Meditation = () => {
    return (
        <div className="meditation-main">
            <div>
                <div className="home-button">
                    <Link to={`/`}><button >Home</button></Link>

                </div>

                <Mantras />
                <Sounds />
            </div>

            <img className="spiral" src="/spinning/spinning-spiral.gif" />

        </div>
    );
};

export default Meditation;
