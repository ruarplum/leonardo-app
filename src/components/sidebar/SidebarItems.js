import React from "react";
import Sidebar from "./Sidebar";
import logo from "./logo.png";
import tech from "./tech.png";
import globe from "./globe.jpg";
import game from "./game.png";
import olympics from "./olympics.png";

import "./SidebarItems.css";

const SidebarItems = () => {
    return (
        <div className="sidebar">
            <h2 className="communitytitle">Top News Communities</h2>
            <div className="communitycont">

                <div className="communityListcont">

                    <div className="listcont" id="listcont1">
                        <div id="listno">1</div>
                        <Sidebar text="r/UpliftingNews" image={logo} />
                    </div>
                    <div className="listcont" id="listcont2">
                        <div id="listno">2</div>
                        <Sidebar text="r/technews" image={tech} />
                    </div>
                    <div className="listcont" id="listcont3">
                        <div id="listno">3</div>
                        <Sidebar text="r/worldnews" image={globe} />
                    </div>
                    <div className="listcont" id="listcont4">
                        <div id="listno">4</div>
                        <Sidebar text="r/gamernews" image={game} />
                    </div>
                    <div className="listcont" id="listcont5">
                        <div id="listno">5</div>
                        <Sidebar text="r/olympics" image={olympics} />
                    </div>

                </div>
                <div className="buttons1">
                    <div className="firstbutton">
                        <button type="button" className="viewAll">View All</button>
                    </div>
                    <div className="buttons2">
                        <div className="tags">
                            <button className="tag">Top</button>
                            <button className="tag">Near You</button>
                            <button className="tag">Gaming</button>
                            <button className="tag">News</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default SidebarItems;