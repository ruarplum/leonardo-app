import "./TopNavbar.css";
import logo from "./logo.png";
import user from "./user.jpg";

function TopNavbar() {
  return (
    <container className="container1">
      <div className="logo">
        <img alt="reddit" src={logo} />
      </div>
      <div className="searchBar">
        <input type="search" name="Search" />
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
        <img alt="userPic" src={user} />
        <select>
          <option value="Profile">Profile</option>
          <option value="Settings">Settings</option>

          <option selected className="userOps">
            User Options
          </option>

          <option value="help">Help Center</option>
        </select>
      </div>
    </container>
  );
}

export default TopNavbar;
