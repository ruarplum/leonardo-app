import "./TopNavbar.css";
import logo from "./logo.png";

function TopNavbar() {
  return (
    <container className="container1">
      <div className="logo">
        <img alt="reddit" src={logo} />
      </div>
      <div className="searchBar">
        <input type="search" name="Search"></input>
      </div>
      <div className="buttons">
        <button type="submit" className="btn1" submit>
          Log In
        </button>
        <button type="submit" className="btn2" submit>
          Sign Up
        </button>
      </div>

      <div className="user">
        <select className="userSelect">
          <option value="Profile">Profile</option>
          <option value="Settings">Settings</option>

          <option selected className="userOps">
            👥
          </option>

          <option value="help">Help Center</option>
        </select>
      </div>
    </container>
  );
}

export default TopNavbar;
