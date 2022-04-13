import React from "react";
import Modal from "react-modal";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { IoCreateSharp } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { IoBookmarkOutline } from "react-icons/io5";
import { AiOutlineHistory } from "react-icons/ai";
import { AiFillSetting } from "react-icons/ai";
import { MdLogout } from "react-icons/md";
import { TiLocationArrow } from "react-icons/ti";
import "../css/nav.scss";

function Nav() {
  const navigate = useNavigate();
  const [userChoice, setUserChoice] = useState("");

  const onListingTypeSelect = (event) => {
    setUserChoice(event.target.value);
  };

  useEffect(() => {
    if (userChoice !== "") {
      onStartSearch();
    }
  }, [userChoice]);

  const onStartSearch = () => {
    console.log(">>>>>> ", userChoice);
    if (userChoice === "all") {
      navigate("/");
    } else {
      navigate("/view-by-category", { state: userChoice });
    }
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

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
            <MdAccountCircle
              size={30}
              className="icon"
              onClick={() => {
                setIsOpen(true);
              }}
            />
          </div>
        </div>
      </div>

      <div className="search-section">
        <div className="search-by-words">
          <input
            type="text"
            placeholder="Search by category, event name, keywords…"
          />
          <AiOutlineSearch className="icon" />
        </div>

        <div className="search-by-location">
          <input type="text" placeholder="Enter the location" />
          <TiLocationArrow className="icon" />
        </div>
      </div>

      <div className="category-slider">
        <ul className="slider-items">
          <input
            type="radio"
            id="all"
            name="listing_type"
            onChange={onListingTypeSelect}
            value="all"
          />
          <label htmlFor="all">All</label>
          <input
            type="radio"
            id="finance"
            name="listing_type"
            onChange={onListingTypeSelect}
            value="Finance"
          />
          <label htmlFor="finance">Finance</label>
          <input
            type="radio"
            id="business"
            name="listing_type"
            onChange={onListingTypeSelect}
            value="Business"
          />
          <label htmlFor="business">Business</label>
          <input
            type="radio"
            id="it"
            name="listing_type"
            onChange={onListingTypeSelect}
            value="IT"
          />
          <label htmlFor="it">IT</label>
          <input
            type="radio"
            id="engineer"
            name="listing_type"
            onChange={onListingTypeSelect}
            value="Engineer"
          />
          <label htmlFor="engineer">Engineer</label>
        </ul>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        closeTimeoutMS={500}
        contentLabel="modal"
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(240, 240, 240, 0.75)",
          },
          content: {
            position: "absolute",
            top: "0",
            left: "5rem",
            right: "0",
            bottom: "0",
            display: "flex",
            flexDirection: "column",
            // justifyContent: "center",
            alignItems: "center",
            borderLeft: "1px solid #d9d9d9",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
            padding: "20px",
          },
        }}
      >
        <div className="modal-account">
          <div className="user-account">
            <div className="close-modal">
              <IoCloseOutline
                size={30}
                className="icon"
                onClick={() => {
                  setIsOpen(false);
                }}
              />
            </div>
            <div>
              <MdAccountCircle size={90} className="account-icon" />
              <h5>Username</h5>
            </div>
          </div>
          <div className="list-wrapper">
            <div
              className="row"
              onClick={() => {
                navigate("/create-event");
              }}
            >
              <IoCreateSharp size={30} className="icon" />
              <h5>Create Event</h5>
            </div>

            <div
              className="row"
              onClick={() => {
                navigate("/delete-event");
              }}
            >
              <AiOutlineUnorderedList size={30} className="icon" />
              <h5>Your Events</h5>
            </div>

            <div className="row">
              <IoBookmarkOutline size={30} className="icon" />
              <h5>Bookmark</h5>
            </div>

            <div className="row">
              <AiOutlineHistory size={30} className="icon" />
              <h5>History</h5>
            </div>

            <div className="row">
              <AiFillSetting size={30} className="icon" />
              <h5>Settings</h5>
            </div>

            <div className="row">
              <MdLogout size={30} className="icon" />
              <h5>Log out</h5>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Nav;
