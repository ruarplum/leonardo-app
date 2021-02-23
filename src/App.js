import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import './App.css';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>Communities Around the World</header>
        <Sidebar text="r/Humboldt" />
        <Sidebar text="r/boulder" />
        <Sidebar text="r/GrandForks" />
        <Sidebar text="r/corona" />
        <Sidebar text="r/Westchester" />

      </div>
    );
  }
}

export default App;
