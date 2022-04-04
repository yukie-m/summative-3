import logo from "./logo.svg";
import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import "./App.scss";
import EventsList from "./components/EventsList";
import EventSingle from "./components/EventSingle";
import EventDetail from "./components/EventDetail";
import CreateEvent from "./components/CreateEvent";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view-events" element={<EventsList />} />
        {/* <Route path='/view-by-gender' element={<WritersByGender />} /> */}

        <Route path="/listing" element={<EventSingle />} />
        <Route path="/event-detail" element={<EventDetail />} />
        <Route path="/create-event" element={<CreateEvent />} />
        {/* <Route path='/logged-out' element={<LoggedOut />} /> */}
      </Routes>
    </div>
  );
}

export default App;
