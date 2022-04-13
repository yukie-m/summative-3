import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import axios from "axios";
import DeleteSingleEvent from "./DeleteSingleEvent";
import { useLocation, useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import "../css/deletetion.scss";

function DeleteEventList() {
  const { user } = useSelector((state) => state.auth);

  const [events, setEvents] = useState([]);

  let navigate = useNavigate();
  const onGoBack = (event) => {
    navigate(-1);
  };

  const reloadEvents = () => {
    axios
      .get(`http://localhost:4000/api/view-events-by-user/${user.email}`)
      .then((response) => {
        if (response.status == 200 && response.data.length > 0) {
          console.log(response.data);
          setEvents(response.data);
        }
      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/view-events-by-user/${user.email}`)
      .then((response) => {
        if (response.status == 200 && response.data.length > 0) {
          console.log(response.data);

          setEvents(response.data);
        }
      });
  }, []);

  return (
    <>
      <button onClick={onGoBack} className="left-arrow" role="submit">
        <MdArrowBack className="back-arrow" />
      </button>
      <div className="list-wrapper">
        <div className="header-text">
          <h1>Your Events</h1>
        </div>
        <div className="single-event">
          {events.map((item, index) => (
            <DeleteSingleEvent
              detailsObj={{ ...item }}
              key={index}
              reloadEvents={reloadEvents}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default DeleteEventList;
