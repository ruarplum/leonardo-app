import React from "react";
import redditPremiumLogo from "./assets/redditPremiumLogo.png" 
import "./PremiumSidebar.css";

const PremiumSidebar = () => {
    return (
        <div className="PremiumSidebar">
            <div className="PremiumContainer" id="PremiumContainer1">
                <img className="PremiumLogo" src={redditPremiumLogo} alt="logo"></img>
            </div>

            <div className="PremiumContainer" id="PremiumContainer2">
                <p className="PremiumDescription"><p id="PremiumDescription">Reddit Premium</p>The best Reddit experience, with monthly Coins</p>
            </div>

            <div className="PremiumContainer" id="PremiumContainer3">
                <button type="button" className="PremiumButton">Try Now</button>
            </div>
        </div>
    )
}

export default PremiumSidebar;