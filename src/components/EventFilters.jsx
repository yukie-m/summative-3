import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { TiLocationArrow } from "react-icons/ti";

function EventFilters() {
  return (
    <div>
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
          <li>Business</li>
          <li>Finance</li>
          <li>Health</li>
          <li>Technology</li>
          <li>Life</li>
          <li>Education</li>
          <li>International</li>
        </ul>
      </div>
    </div>
  );
}

export default EventFilters;
