import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import EventsList from "../components/EventsList";
import Nav from "../components/Nav";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home">
      <Nav />
      {/* <div
        onClick={() => {
          navigate("/sign-up");
        }}
      >
        Sign-up
      </div> */}
      <EventsList />
    </div>
  );
}

export default Home;
