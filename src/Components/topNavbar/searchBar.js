import React from "react";
import { FcSearch } from "react-icons/all";
import "./searchbar.css";

export default function searchBar() {
  return (
    <div className="searchbar">
      <label htmlFor="searchbar">
        <FcSearch />
      </label>
      <input id="searchbar" placeholder="search" />
    </div>
  );
}
