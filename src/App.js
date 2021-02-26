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
import Sun from "./Components/News-Feed/sun-explode.jpg"
function App() {
  // add new posts here
  const [postList, setPostList] = useState([
    {
      author: "RedditUser21",
      catagory: "veryInteresting",
      upVote: 2,
      downVote: 6,
      star: 5,
      help: 2,
      seal: 17,
      spoon: 0,
      hugz: 12,
      time: 12,
      textTitle: "The most interesting story",
      textBody:"This is a really and I mean really interesting story"
    },
    {
      author: "Leonardo",
      catagory: "Art",
      upVote: 12,
      downVote: 1,
      star: 6,
      help: 0,
      seal: 2,
      spoon: 6,
      hugz: 7,
      time: 6,
      textTitle: "The Artist",
      textBody: "Leonardo da Vinci's total output in painting is really rather small; there are less than 20 surviving paintings that can be definitely attributed to him, and several of them are unfinished. Two of his most important works—the Battle of Anghiari and the Leda, neither of them completed—have survived only in copies."
    },
    {
      author: "Neil",
      catagory: "RandomText",
      upVote: 22,
      downVote: 5,
      star: 12,
      help: 3,
      seal: 2,
      spoon: 19,
      hugz: 0,
      time: 8,
      textBody: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ... Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      author: "whaleWatcher",
      catagory: "SeaLife",
      upVote: 20,
      downVote: 0,
      star: 1,
      help: 3,
      seal: 1,
      spoon: 0,
      hugz: 0,
      time: 1,
      textTitle: "This is image of whale",
      img:<img id="newImage"src={whaleImg} alt="image of whale" />
    },
    {
      author: "Dora",
      catagory: "DoraTheExplorer",
      upVote: 0,
      downVote: 3,
      star: 1,
      help: 3,
      seal: 8,
      spoon: 1,
      hugz: 6,
      time: 0.5,
      textTitle:"Trump KILLS Dora",
      textBody:"Trump really has killed Dora The Explorer "
    },
    {
      author: "ManU1Fan",
      catagory: "FootballFocus",
      upVote: 20,
      downVote: 4,
      star: 7,
      help: 3,
      seal: 8,
      spoon: 0,
      hugz: 0,
      time: 16,
      textTitle:"Today's Football News",
      textBody:"Atletico Madrid vs Chelsea: Chelsea took a first leg advantage in the Champions League round of 16 with a 1-0 win at the Wanda Metropolitano. ISL: NorthEast United FC held their nerve and defended resolutely to secure the three points and stay on track for a top-four finish."
    },
    {
      author: "FlatEarther",
      catagory: "WorldReality",
      upVote: 20,
      downVote: 4,
      star: 1,
      help: 3,
      seal: 1,
      spoon: 6,
      hugz: 0,
      time: 3,
      textTitle:"Sun set to explode!",
      img:<img id="newImage" src={Sun} alt="Picture of sun exploding" />
    },
    {
      author: "Dog1",
      catagory: "Dogs",
      upVote: 24,
      downVote: 0,
      star: 20,
      help: 3,
      seal: 1,
      spoon: 0,
      hugz: 20,
      time: 1,
      textBody:"DOGs take over world"
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
