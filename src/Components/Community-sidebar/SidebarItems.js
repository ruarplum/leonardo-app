import React from "react";
import Sidebar from "./Sidebar";
import logoreddit from "./assets/logo.png";
import technologyLogo from "./assets/tech.png";
import globelogo from "./assets/globe.jpg";
import gamerlogo from "./assets/game.png";
import olympicslogo from "./assets/olympics.png";
import pattern from "./assets/pattern.jpg";

import "./SidebarItems.css";

const SidebarItems = () => {
    return (
        <div className="sidebarcommunity">
            <h2 className="communitytitle" style={{backgroundImage:`url(${pattern})`}}>Top News Communities</h2>
            <div className="communitycont">

                <div className="communityListcont">

                    <div className="listcontcom" id="listcontcom">
                        <div id="comlistno" id="listcontcom">1</div>
                        <Sidebar text="r/UpliftingNews" image={logoreddit} />
                    </div>
                    <div className="listcontcom" id="listcontcom">
                        <div id="comlistno">2</div>
                        <Sidebar text="r/technews" image={technologyLogo} />
                    </div>
                    <div className="listcontcom" id="listcontcom">
                        <div id="comlistno">3</div>
                        <Sidebar text="r/worldnews" image={globelogo} />
                    </div>
                    <div className="listcontcom" id="listcontcom">
                        <div id="comlistno">4</div>
                        <Sidebar text="r/gamernews" image={gamerlogo} />
                    </div>
                    <div className="listcontcom" id="listcontcom">
                        <div id="comlistno">5</div>
                        <Sidebar text="r/olympics" image={olympicslogo} />
                    </div>

                </div>
                <div className="allcombuttons">
                    <div className="comviewAllcontainer">
                        <button type="button" className="communityviewAll">View All</button>
                    </div>
                    <div className="comTagscontainer">
                        <div className="communityTagscontainer">
                            <button className="communityTag">Top</button>
                            <button className="communityTag">Near You</button>
                            <button className="communityTag">Gaming</button>
                            <button className="communityTag">News</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default SidebarItems;