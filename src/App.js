import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import logo from "./components/sidebar/logo.png";
import "./components/sidebar/Sidebar.css";

 

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>Communities Around the World</header>
        <Sidebar text="r/Humboldt" image={logo}/>
        <Sidebar text="r/boulder" image={logo} />
        <Sidebar text="r/GrandForks" image={logo} />
        <Sidebar text="r/corona" image={logo} />
        <Sidebar text="r/Westchester" image={logo}/>
        <button type="button" className="viewAll">View All</button>
        <br/>
        <button className="tag1">Top</button>
        <button className="tag2">Near You</button>
        <button className="tag3">Gaming</button>
        <button className="tag4">News</button>
      </div>
    );
  }
}

export default App;
