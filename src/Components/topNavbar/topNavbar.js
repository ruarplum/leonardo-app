import "./TopNavbar.css";
import logo from "./logo.png";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const options = ["Profile", "Settings", "Help Center"];
const defaultOption = options[0];

function TopNavbar() {
  return (
    <div className="container1">
      <div className="logo">
        <img alt="reddit" src={logo} />
      </div>

      <div className="searchBar">
        <div></div>
        <input
          type="search"
          id="site-search"
          name="q"
          aria-label="Search through site content"
        />
      </div>
      <div class="topnav"></div>
      <div className="buttons">
        <button type="submit" className="btn1">
          Log In
        </button>
        <button type="submit" className="btn2">
          Sign Up
        </button>
        <form />
      </div>

      <div className="user">
        <div className="dropdown">
          <Dropdown
            options={options}
            value={defaultOption}
            placeholder="User Option"
          />
        </div>
      </div>
    </div>
  );
}

export default TopNavbar;
