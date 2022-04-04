import React from "react";
import { useNavigate } from "react-router-dom";
import EventsList from "../components/EventsList";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <div
        onClick={() => {
          navigate("/create-event");
        }}
      >
        Create Event
      </div>
      <EventsList />
    </div>
  );
}

export default Home;
