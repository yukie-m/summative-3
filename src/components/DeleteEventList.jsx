import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import DeleteSingleEvent from "./DeleteSingleEvent";

function DeleteEventList() {
  const [events, setEvents] = useState([]);

  const reloadEvents = () => {
    axios.get("http://localhost:4000/api/view-events").then((response) => {
      if (response.status == 200 && response.data.length > 0) {
        setEvents(response.data);
      }
    });
  };
  useEffect(() => {
    axios.get("http://localhost:4000/api/view-events").then((response) => {
      if (response.status == 200 && response.data.length > 0) {
        setEvents(response.data);
      }
    });
  }, []);

  return (
    <div>
      {events.map((item, index) => (
        <DeleteSingleEvent
          detailsObj={{ ...item }}
          key={index}
          reloadEvents={reloadEvents}
        />
      ))}
    </div>
  );
}

export default DeleteEventList;
