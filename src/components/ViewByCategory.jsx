import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../css/listings.scss";
import EventSingle from "./EventSingle";
import Nav from "./Nav";

function ViewByCategory() {
  let location = useLocation();
  const [listings, setListings] = useState([]);

  useEffect(() => {
    console.log(`searching for all ${location.state}'s`);
    axios
      .get(`http://localhost:4000/api/view-event-by-category/${location.state}`)
      .then((response) => {
        if (response.status == 200 && response.data.length > 0) {
          setListings(response.data);
          console.log(response.data);
        }
      });
  }, []);

  return (
    <>
      <div>
        <Nav />
        <h3> {location.state}</h3>
        {listings.map((item, index) => (
          <EventSingle detailsObj={{ ...item }} key={index} />
        ))}
      </div>
    </>
  );
}

export default ViewByCategory;