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
      

      </div>
    );
  }
}

export default App;
