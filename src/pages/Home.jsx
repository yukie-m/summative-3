import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import EventsList from "../components/EventsList";
import EventFilters from "../components/EventFilters";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <EventFilters />
      <EventsList />
    </div>
  );
}

export default Home;
