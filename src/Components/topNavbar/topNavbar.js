import "./TopNavbar.css";
import logo from "./logo.png";
import Actions from "./actions";
import { IoMdArrowDropdown } from "react-icons/all";

import SearchBar from "./searchBar";

import "react-dropdown/style.css";

function TopNavbar() {
  return (
    <div className="container1">
      <div className="logo">
        <img alt="reddit" src={logo} />
      </div>

      <div className="searchBar">
        <SearchBar />
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
        <Actions />
        <div className="dropdown">
          <div className="dropdown"></div>
        </div>
      </div>
    </div>
  );
}

export default TopNavbar;
