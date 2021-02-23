import React from "react";
import Sidebar from "./components/Sidebar";
import './App.css';

function App() {
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

export default App;
