import logo from './logo.svg';
import Feed from './Components/News-Feed/News-Feed';
import TrendingToday from './Components/TrendingToday#5/TrendingToday'
import './App.css';

function App() {
  return (
    <div className="App">
      <TrendingToday />
      <Feed />
    </div>
  );
}

export default App;
