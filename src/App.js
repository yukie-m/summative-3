import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import "./App.scss";
import EventsList from "./components/EventsList";
import EventSingle from "./components/EventSingle";
import EventDetail from "./components/EventDetail";
import CreateEvent from "./components/CreateEvent";
import DeleteEventList from "./components/DeleteEventList";
import ViewByCategory from "./components/ViewByCategory";
import SignUp from "./components/SignUp";

function App() {
  useEffect(() => {
    document.title = "Eventful";
  }, []);
  return (
    <div className="App">
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />
            <Route path="/view-events" element={<EventsList />} />
            <Route path="/view-by-category" element={<ViewByCategory />} />
            <Route path="/listing" element={<EventSingle />} />
            <Route path="/event-detail" element={<EventDetail />} />
            <Route path="/create-event" element={<CreateEvent />} />
            <Route path="/delete-event" element={<DeleteEventList />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
