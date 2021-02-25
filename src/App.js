import React from "react";
import TopNavbar from "./Components/topNavbar/topNavbar";
import Feed from "./Components/News-Feed/News-Feed";
import TrendingToday from "./Components/TrendingToday#5/TrendingToday";
import PopularNavbar from "./Components/Popular-posts-navbar/Popular-posts-navbar";
import TrendCommArea from './Components/TrendComm-Sidebar/TrendCommArea';
import PopCommArea from "./Components/PopComm-sidebar/PopCommArea"
import SidebarItems from "./Components/Community-sidebar/SidebarItems";
import AdvertSidebar from "./Components/Advertisement-sidebar/AdvertSidebar";
import PremiumSidebar from "./Components/Premium-sidebar/PremiumSidebar";
import LinkSidebarItems from "./Components/Links-sidebar/LinkSidebarItems";
import "./App.css";

function App() {
  const postList = [
    {author:"u/Nick", catagory:"r/Reddit", upVote:2, downVote:6, star:5, help:2, seal:17, spoon:0, hugz:12},
    {author:"u/Dan", catagory:"r/Pink", upVote:12, downVote:1, star:6},
    {author:"u/Tom", catagory:"r/Blue", upVote:6, downVote:5, star:12},
    {author:"u/Tim", catagory:"r/Red", upVote:20, downVote:4},
  ]

  return (
    <div className="App">
      <TopNavbar />
      <TrendingToday />
      <div className="mainFeedArea">
        <div className="currentFeedArea">
          <PopularNavbar />
          <Feed posts={postList}/>
        </div>
        <div className="sideFeedArea">
          <SidebarItems />
          <AdvertSidebar/>
          <PremiumSidebar/>
          <TrendCommArea />
          <PopCommArea/>
          <LinkSidebarItems/>
        </div>
      </div>
    </div>
  );
}

export default App;
