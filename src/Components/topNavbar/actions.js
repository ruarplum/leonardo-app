import React from "react";
import { AiOutlineUser } from "react-icons/all";
import { IoMdArrowDropdown } from "react-icons/all";

import "./actions.css";
export default function Actions() {
  return (
    <div className="actions">
      <div className="profile">
        <div>
          <button className="userbtn">
            <AiOutlineUser />
            <IoMdArrowDropdown />
          </button>
        </div>
      </div>
    </div>
  );
}
