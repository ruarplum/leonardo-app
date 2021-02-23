import "./TopNavbar.css";
import logo from "./logo.png";

function TopNavbar() {
  return (
    <div className="container1">
      <div className="logo">
        <img alt="reddit" src={logo} />
      </div>
      <div className="searchBar">
        <input type="search" name="Search"></input>
      </div>
      <div className="buttons">
        <button type="submit" className="btn1">
          Log In
        </button>
        <button type="submit" className="btn2">
          Sign Up
        </button>
      </div>

      <div className="user">
        <select className="userSelect">
          <option value="Profile">👥</option>
          <option value="Settings">Settings</option>

          <option className="userOps">Profile</option>

          <option value="help">Help Center</option>
        </select>
      </div>
    </div>
  );
}

export default TopNavbar;
