import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { AiOutlineSearch } from "react-icons/ai";
import { TiLocationArrow } from "react-icons/ti";

function EventFilters() {
  const navigate = useNavigate();

  const [userChoice, setUserChoice] = useState("");

  useEffect(() => {
    if (userChoice !== "") {
      onStartSearch();
    }
  }, [userChoice]);

  const onListingTypeSelect = (event) => {
    setUserChoice(event.target.value);
  };

  const onStartSearch = () => {
    console.log(">>>>>> ", userChoice);
    if (userChoice === "all") {
      navigate("/");
    } else {
      navigate("/view-by-category", { state: userChoice });
    }
  };

  return (
    <div className="">
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
    </div>
  );
}

export default EventFilters;
