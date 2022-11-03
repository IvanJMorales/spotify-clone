import React from "react";
import Header from "./Header.js";
import "./Body.css";

function Body({ spotify }) {
    return (
        <div className="body">
            <Header spotify={spotify} />

            <div className="body_info">
                <img src="" alt="" />
                <div className="body_infoText">

                </div>
            </div>
        </div>
    );
}

export default Body