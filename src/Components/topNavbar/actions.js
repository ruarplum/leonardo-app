import React from "react";
import { AiOutlineUser } from "react-icons/all";
import { IoMdArrowDropdown } from "react-icons/all";
import "./actions.css";

import "./actions.css";
export default function Actions() {
  return (
    <div className="actions">
      <div className="profile">
        <button className="userbtn" onclick="myFunction()">
          <div className="dropdownopt">
            <a></a>
          </div>
          <AiOutlineUser />
          <IoMdArrowDropdown />
        </button>
      </div>
    </div>
  );
}
