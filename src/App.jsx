import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import "./App.scss";
import EventsList from "./components/EventsList";
import EventSingle from "./components/EventSingle";
import EventDetail from "./components/EventDetail";
import CreateEvent from "./components/CreateEvent";
import DeleteEventList from "./components/DeleteEventList";
import ViewByCategory from "./components/ViewByCategory";
import SignUp from "./components/SignUp";
import EditEvent from "./components/EditEvent";

function App() {
  useEffect(() => {
    document.title = "Eventful";
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view-events" element={<EventsList />} />
        <Route path="/view-by-category" element={<ViewByCategory />} />

        <Route path="/listing" element={<EventSingle />} />
        <Route path="/event-detail" element={<EventDetail />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/delete-event" element={<DeleteEventList />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/update-event" element={<EditEvent />} />
        {/* <Route path='/logged-out' element={<LoggedOut />} /> */}
      </Routes>
    </div>
  );
}

export default App;
