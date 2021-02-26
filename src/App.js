import React, { useState, useEffect } from "react";
import TopNavbar from "./Components/topNavbar/topNavbar";
import Feed from "./Components/News-Feed/News-Feed";
import TrendingToday from "./Components/TrendingToday#5/TrendingToday";
import PopularNavbar from "./Components/Popular-posts-navbar/Popular-posts-navbar";
import TrendCommArea from "./Components/TrendComm-Sidebar/TrendCommArea";
import PopCommArea from "./Components/PopComm-sidebar/PopCommArea";
import SidebarItems from "./Components/Community-sidebar/SidebarItems";
import AdvertSidebar from "./Components/Advertisement-sidebar/AdvertSidebar";
import PremiumSidebar from "./Components/Premium-sidebar/PremiumSidebar";
import LinkSidebarItems from "./Components/Links-sidebar/LinkSidebarItems";
import "./App.css";
import whaleImg from "./Components/News-Feed/whale.jpg"

function App() {
  const [postList, setPostList] = useState([
    {
      author: "u/Nick",
      catagory: "r/Reddit",
      upVote: 2,
      downVote: 6,
      star: 5,
      help: 2,
      seal: 17,
      spoon: 0,
      hugz: 12,
      time: 12,
      text: "This is text for the first post",
    },
    {
      author: "u/Dan",
      catagory: "r/Pink",
      upVote: 12,
      downVote: 1,
      star: 6,
      help: 0,
      seal: 2,
      spoon: 6,
      hugz: 7,
      time: 6,
      text: "Second post text",
    },
    {
      author: "u/Tom",
      catagory: "r/Blue",
      upVote: 22,
      downVote: 5,
      star: 12,
      help: 3,
      seal: 2,
      spoon: 19,
      hugz: 0,
      time: 8,
      text: "The third text section",
    },
    {
      author: "u/Tim",
      catagory: "r/Red",
      upVote: 20,
      downVote: 4,
      star: 1,
      help: 3,
      seal: 1,
      spoon: 0,
      hugz: 0,
      time: 1,
      text: "This is image of whale",
      img:<img id="newImage"src={whaleImg} alt="image of whale" />
    },
  ]);
//*---------- Button functions on popNavbar-------
  const sortBy = (fn) => {
    setPostList([...postList.sort(fn)])
  }

  const sortNew = (a, b) => a.time - b.time

  const sortHot = (a, b) => (b.upVote - b.downVote)-(a.upVote - a.downVote)

  const sortTop = (a, b) => b.star - a.star

  const addNewPost = () => {
    setPostList([
      ...postList,
      {
        author: "u/Dan",
        catagory: "r/Pink",
        upVote: 12,
        downVote: 1,
        star: 6,
        help: 0,
        seal: 2,
        spoon: 6,
        hugz: 7,
        time: 6,
      },
    ]);
  };

  return (
    <div className="App">
      <TopNavbar />
      <TrendingToday />
      <div className="mainFeedArea">
        <div className="currentFeedArea">
          <PopularNavbar sortBy={sortBy} sortNew={sortNew} sortHot={sortHot} sortTop={sortTop} />
          <Feed posts={postList} />
        </div>
        <div className="sideFeedArea">
          <SidebarItems />
          <AdvertSidebar />
          <PremiumSidebar />
          <TrendCommArea />
          <PopCommArea />
          <LinkSidebarItems />
        </div>
      </div>
    </div>
  );
}

export default App;
