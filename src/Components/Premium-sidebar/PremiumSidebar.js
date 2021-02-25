import React from "react";
import redditPremiumLogo from "./assets/redditPremiumLogo.png" 
import "./PremiumSidebar.css";

const PremiumSidebar = () => {
    return (
        <div className="PremiumSidebar">
            <div className="PremiumContainer" id="PremiumContainer1">
                <img src={redditPremiumLogo} alt="logo"></img>
            </div>

            <div className="PremiumContainer" id="PremiumContainer2">
                <h2 className="PremiumTitle">Reddit Premium</h2>
                <h3 className="PremiumDescription">The best Reddit experience, with monthly Coins</h3>
            </div>

            <div className="PremiumContainer" id="PremiumContainer3">
                <button type="button" className="PremiumButton">Try Now</button>
            </div>
        </div>
    )
}

export default PremiumSidebar;