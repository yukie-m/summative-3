import React from "react";
import logo from "../logo.svg";

function EventSingle() {
  return (
    <div className="event-card">
      <div className="event-thumbnail">
        <img src={logo} />
      </div>
      <div className="event-details">
        <h2 className="event-name">Event Name</h2>
        <div className="event-category">Category</div>
        <div className="flex space-between">
          <div className="event-date">Date</div>
          <div className="event-location">Location</div>
        </div>
        <div className="flex space-between">
          <div className="event-comments">12</div>
          <div className="event-likes">15</div>
        </div>
      </div>
    </div>
  );
}

export default EventSingle;
