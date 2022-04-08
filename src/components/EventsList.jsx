import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import EventSingle from "./EventSingle";
import "../css/listings.scss";

function EventsList() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/api/view-events").then((response) => {
      if (response.status === 200 && response.data.length > 0) {
        setListings(response.data);
      }
    });
  }, []);
  return (
    <div className="event-list-container">
      {listings.map((item, index) => (
        <EventSingle detailsObj={{ ...item }} key={index} />
      ))}
    </div>
  );
}

export default EventsList;
