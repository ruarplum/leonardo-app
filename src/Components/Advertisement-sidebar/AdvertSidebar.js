import React from "react";
import advertlogo from "./assets/advertlogo.png";
import "./AdvertSidebar.css";

const AdvertSidebar = () => {
    return (
        <div className="AdvertSidebar">
           
            <div className="advertTitle">
                <p>ADVERTISEMENT</p>
            </div>

            <div className="advertlogo">
                <img id="advertlogo" src={advertlogo} alt="advertlogo"></img>
            </div>

        </div>
    )
}

export default AdvertSidebar;