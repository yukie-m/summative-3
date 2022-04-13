import React from "react";
import axios from "axios";

import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Select, { components } from "react-select";
import Modal from "react-modal";
import "../css/form.scss";
import { MdArrowBack } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";
import { MdDoneAll } from "react-icons/md";
import { IoIosClose } from "react-icons/io";

//onChange event target value
const categoryOptions = [
  { value: "Business", label: "Business" },
  { value: "Finance", label: "Finance" },
  { value: "IT", label: "IT" },
  { value: "Engineer", label: "Engineer" },
];

const locationOptions = [
  { value: "Auckland", label: "Auckland" },
  { value: "Wellington", label: "Wellington" },
  { value: "Christchurch", label: "Christchurch" },
  { value: "Virtual", label: "Virtual" },
];
const imageOptions = [
  { value: "business.jpg", label: "Business Photo" },
  { value: "finance.jpg", label: "Finance Photo" },
  { value: "it.jpg", label: "IT Photo" },
  { value: "women.jpg", label: "Women Photo" },
  { value: "noPhoto.png", label: "No Photo" },
];

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <MdArrowDropDown style={{ fontSize: "24px" }} />
    </components.DropdownIndicator>
  );
};

function EditEvent() {
  let navigate = useNavigate();
  let location = useLocation();
  const [eventObject, setEventObject] = useState({});

  const onGoBack = (event) => {
    navigate(-1);
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function updateCategory(selectedOption) {
    console.log(selectedOption.value);
  }

  useEffect(() => {
    loadEventDetails();
  }, []);

  const loadEventDetails = (event) => {
    if (location.state) {
      console.log(
        ">> STATE ",
        `http://localhost:4000/api/view-event-by-id/${location.state}`
      );
      axios
        .get(`http://localhost:4000/api/view-event-by-id/${location.state}`)
        .then((response) => {
          if (response.status === 200 && response.data != null) {
            setEventObject(response.data);
          }
        });
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();

    let currentForm = event.target;

    let data = {
      title: currentForm.elements["event_title"].value,
      date: currentForm.elements["event_date"].value,
      category: currentForm.elements["category_name"].value,
      location: currentForm.elements["location_name"].value,
      link: currentForm.elements["link_url"].value,
      thumb: currentForm.elements["thumb"].value,
      description: currentForm.elements["event_details"].value,
    };

    console.table(data);

    axios
      .put(`http://localhost:4000/api/update-event/${location.state}`, data)
      .then((response) => {
        if (response.data.error) {
          console.log("ERRROR, UPDATE Event");
        } else {
          setIsOpen(true);
          console.log("SUCCESS, UPDATE Event");
        }
      });
  };

  return (
    <>
      <button onClick={onGoBack} className="left-arrow" role="submit">
        <MdArrowBack className="back-arrow" />
      </button>
      <div className="wrapper">
        <div className="create-listing-wrap">
          <h1>Edit Your Event</h1>

          <form onSubmit={onSubmit}>
            <label>
              <span>Title</span>
              <input
                type="text"
                placeholder=""
                name="event_title"
                defaultValue={eventObject.title}
                required
              />
            </label>
            <label>
              <span>Date</span>
              <input
                type="date"
                placeholder=""
                name="event_date"
                defaultValue={eventObject.date}
              />
            </label>

            <label>
              <span>Category</span>
              <Select
                options={categoryOptions}
                placeholder="Select Category"
                name="category_name"
                className="hide-default"
                components={{ DropdownIndicator }}
                onChange={updateCategory}
                required
              ></Select>
            </label>

            <label>
              <span>Location</span>
              <Select
                options={locationOptions}
                placeholder="Select Location"
                name="location_name"
                className="hide-default"
                components={{ DropdownIndicator }}
                required
              ></Select>
            </label>

            <label>
              <span>Link URL</span>
              <input
                type="text"
                placeholder=""
                name="link_url"
                defaultValue={eventObject.link}
              />
            </label>

            <label>
              <span>Select image</span>
              <Select
                options={imageOptions}
                placeholder="Select Image"
                name="thumb"
                className="hide-default"
                components={{ DropdownIndicator }}
                required
              ></Select>
            </label>

            <label>
              <span>Event details</span>
              <textarea
                type="text"
                placeholder=""
                name="event_details"
                rows={5}
                defaultValue={eventObject.description}
                required
              />
            </label>
            <button role="submit">Create</button>
          </form>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          ariaHideApp={false}
          style={{
            overlay: {
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(240, 240, 240, 0.75)",
            },
            content: {
              position: "absolute",
              top: "18rem",
              left: "5rem",
              right: "5rem",
              bottom: "18rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid black",
              background: "#fff",
              overflow: "auto",
              WebkitOverflowScrolling: "touch",
              borderRadius: "4px",
              outline: "none",
              padding: "20px",
            },
          }}
        >
          <div className="check-success">
            <p>Updated</p>
            <MdDoneAll size={52} color={"#006ba6"} />
          </div>
        </Modal>
      </div>
    </>
  );
}

export default EditEvent;

// title: String,
// description: String,
// host: String,
// price: Number,
// date: String,
// time: String,
// thumb: String,
// location: String,
// category: String,
// attending: Number,
// link: String,
// follower: String,
// following: String,
// virtual: String,
