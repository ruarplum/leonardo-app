import React from "react";
import Sidebar from "./Sidebar";
import logo from "./logo.png";
import "./Sidebar.css";

const SidebarItems = () => {

    return (
        <div className="sidebar">
            <h2 className="title">Communities Around the World</h2>
            <div className="communityListcont">
                <ol>
                    <li><Sidebar text="r/Humboldt" image={logo} /></li>
                    <li><Sidebar text="r/boulder" image={logo} /></li>
                    <li><Sidebar text="r/GrandForks" image={logo} /></li>
                    <li><Sidebar text="r/corona" image={logo} /></li>
                    <li><Sidebar text="r/Westchester" image={logo} /></li>
                </ol>
                <button type="button" className="viewAll">View All</button>
                <br />
                <button className="tag1">Top</button>
                <button className="tag2">Near You</button>
                <button className="tag3">Gaming</button>
                <button className="tag4">News</button>
            </div>
        </div>
    );

}

export default SidebarItems;