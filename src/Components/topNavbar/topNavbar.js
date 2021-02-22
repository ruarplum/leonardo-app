import "./TopNavbar.css";
import logo from "./logo.png";

function TopNavbar() {
  return (
    <container className="container">
      <div className="logo">
        <img alt="reddit" src={logo} />
      </div>
      <div className="searchBar">
        <input type="text" name="Search" /> search
      </div>
      <div className="buttons">
        <button type="submit" submit>
          Log In
        </button>
        <button type="submit" submit>
          Sign Up
        </button>
      </div>
    </container>
  );
}

export default TopNavbar;
