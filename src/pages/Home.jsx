import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import EventsList from "../components/EventsList";
import Nav from "../components/Nav";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <Nav />
      <EventsList />
    </div>
  );
}

export default Home;
