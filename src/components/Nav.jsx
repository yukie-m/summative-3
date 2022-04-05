import React from "react";
import "../css/nav.scss";
import { useNavigate } from "react-router-dom";
import { IoCreateSharp } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";

function Nav() {
  const navigate = useNavigate();
  return (
    <>
      <div className="nav-wrapper">
        <div className="nav-logo">
          <img src="./images/Logo.png" alt="logo" />
        </div>
        <div className="icons-right">
          <div
            onClick={() => {
              navigate("/create-event");
            }}
          >
            <IoCreateSharp size={30} className="icon" />
          </div>
          <div>
            <MdAccountCircle size={30} className="icon" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
