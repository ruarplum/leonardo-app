import "./Components/topNavbar.css";
import React, { Component } from "react";
import logo from "./Components/redditLogo.png";

function TopNavbar (){
    return(
        <container>
        <div className="logo">
        <p>

        {logo}

        </p>

        </div>
        <div className="searchBar">
            <input type="text" name ="Search"> search</input>
            </div>
        <div classnmae="LogIn"> log in</div>
        </container>
    )

}
export function TopNavbar; 