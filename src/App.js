import logo from "./logo.svg";
import Feed from "./Components/News-Feed/News-Feed";
import TrendingToday from "./Components/TrendingToday#5/TrendingToday";
import PopularNavbar from "./Components/Popular-posts-navbar/Popular-posts-navbar";
import "./App.css";
import TopNavbar from "./Components/topNavbar/topNavbar";

function App() {
  return (
    <div className="App">
      <TopNavbar />
      <TrendingToday />
      <Feed />
      <PopularNavbar />
    </div>
  );
}

export default App;
