import React from "react";
import advertlogo from "./assets/advertlogo.png";
import "./AdvertSidebar.css";

const AdvertSidebar = () => {
    return (
        <div className="AdvertSidebar">
           
            <div className="advertTitle">
                <p>ADVERTISEMENT</p>
            </div>
            <div id="advertcontainer"> 
            <div className="advertcontainer">
                <h2 className="skyTitle">   Super reliable, Superfast Broadband</h2>
                <img id="advertlogo" src={advertlogo} alt="advertlogo"></img>
                <h1 className="skySubtitle">sky</h1>
            </div>
            </div>

        </div>
    )
}

export default AdvertSidebar;