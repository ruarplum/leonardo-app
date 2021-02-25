import React from "react";
import TopNavbar from "./Components/topNavbar/topNavbar";
import Feed from "./Components/News-Feed/News-Feed";
import TrendingToday from "./Components/TrendingToday#5/TrendingToday";
import PopularNavbar from "./Components/Popular-posts-navbar/Popular-posts-navbar";
import SidebarItems from "./Components/Community-sidebar/SidebarItems";
import PremiumSidebar from "./Components/Premium-sidebar/PremiumSidebar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TopNavbar />
      <TrendingToday />
      <div className="mainFeedArea">
        <div className="currentFeedArea">
          <PopularNavbar />
          <Feed />
        </div>
        <div className="sideFeedArea">
          <SidebarItems />
          <PremiumSidebar/>
        </div>
      </div>
    </div>
  );
}

export default App;
