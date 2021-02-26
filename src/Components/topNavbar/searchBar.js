import React from "react";
import { BiSearch } from "react-icons/all";
import "./searchbar.css";

export default function searchBar() {
  return (
    <div className="searchbar">
      <label htmlFor="searchbar">
        <BiSearch />
      </label>
      <input id="searchbar" placeholder="search" />
    </div>
  );
}
