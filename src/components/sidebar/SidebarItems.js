import React from "react";
import Sidebar from "./Sidebar";
import logo from "./logo.png";
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
                        <Sidebar text="r/technews" image={logo} />
                    </div>
                    <div className="listcont" id="listcont3">
                        <div id="listno">3</div>
                        <Sidebar text="r/worldnews" image={logo} />
                    </div>
                    <div className="listcont" id="listcont4">
                        <div id="listno">4</div>
                        <Sidebar text="r/gamernews" image={logo} />
                    </div>
                    <div className="listcont" id="listcont5">
                        <div id="listno">5</div>
                        <Sidebar text="r/olympics" image={logo} />
                    </div>

                </div>
                <div className="buttons">
                    <button type="button" className="viewAll">View All</button>
                    <br />
                    <button className="tag1">Top</button>
                    <button className="tag2">Near You</button>
                    <button className="tag3">Gaming</button>
                    <button className="tag4">News</button>
                </div>
            </div>
        </div>
    );

}

export default SidebarItems;