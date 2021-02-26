import React from "react";
import advertlogo from "./assets/advertlogo.png";
import codenationLogo from "./assets/codenationLogo.png";
import "./AdvertSidebar.css";

const AdvertSidebar = () => {
    return (
        <div>

            <div className="AdvertSidebar">

                <div className="advertTitle">
                    <p>ADVERTISEMENT</p>
                </div>
                <div id="advertcontainer">
                    <div className="advertcontainer2">
                        <h2 className="skyTitle">   Super reliable, Superfast Broadband</h2>
                        <img id="advertlogo" src={advertlogo} alt="advertlogo"></img>
                        <h1 className="skySubtitle">sky</h1>
                        <h3 className="clickforlegals">Click for legals</h3>
                    </div>
                </div>

            </div>

            <div className="Codenationadvert">
                <div className="advertTitle">
                    <p>ADVERTISEMENT</p>
                </div>
                <div className="advertcontainer1">
                    <img id="codenationLogo" src={codenationLogo} alt="codenationLogo"></img>
                <div className="CodenationLink"><a href="https://wearecodenation.com/" id="CodenationLink">Click to see more about CODENATION</a></div>
                </div>
            </div>

        </div>
    )
}

export default AdvertSidebar;