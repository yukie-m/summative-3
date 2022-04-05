import React from "react";
import axios from "axios";
import { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Select, { components } from "react-select";
import Modal from "react-modal";
import "../css/form.scss";
import { MdArrowBack } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";
import { MdDoneAll } from "react-icons/md";
import { IoIosClose } from "react-icons/io";

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
  { value: "business.jpg", label: "Business" },
  { value: "finance.jpg", label: "Finance" },
  { value: "it.jpg", label: "IT" },
  { value: "women.jpg", label: "Women" },
  { value: "noPhoto.png", label: "No Photo" },
];

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <MdArrowDropDown style={{ fontSize: "24px" }} />
    </components.DropdownIndicator>
  );
};

function CreateEvent() {
  let navigate = useNavigate();
  let location = useLocation();
  const onGoBack = (event) => {
    navigate(-1);
  };

  const titleInputRef = useRef();
  const dateInputRef = useRef();
  const categoryInputRef = useRef();
  const locationInputRef = useRef();
  const urlInputRef = useRef();
  const imageInputRef = useRef();
  const descriptionInputRef = useRef();

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const onSubmit = (event) => {
    event.preventDefault();

    let formdata = {
      title: titleInputRef.current.value,
      date: dateInputRef.current.value,
      category: categoryInputRef.current.value,
      location: locationInputRef.current.value,
      link: urlInputRef.current.value,
      thumb: imageInputRef.current.value,
      description: descriptionInputRef.current.value,
    };

    axios
      .post("//localhost:4000/api/create-event", formdata)
      .then((response) => {
        if (response.data.error) {
          console.log("ERRROR, UPDATE USER");
        } else {
          setIsOpen(true);
          console.log("SUCCESS, UPDATE USER");
        }
      });
  };

  return (
    <>
      <div className="wrapper">
        <button onClick={onGoBack} className="left-arrow" role="submit">
          <MdArrowBack />
        </button>
        <div className="create-listing-wrap">
          <h1>Create Event</h1>

          <form onSubmit={onSubmit}>
            <label>
              <span>Title</span>
              <input
                ref={titleInputRef}
                type="text"
                placeholder=""
                name="event-title"
                required
              />
            </label>
            <label>
              <span>Date</span>
              <input
                ref={dateInputRef}
                type="date"
                placeholder=""
                name="event-date"
              />
            </label>

            <label>
              <span>Category</span>
              <Select
                ref={categoryInputRef}
                options={categoryOptions}
                placeholder="select"
                name="category_name"
                className="hide-default"
                components={{ DropdownIndicator }}
                required
              ></Select>
            </label>

            <label>
              <span>Location</span>
              <Select
                ref={locationInputRef}
                options={locationOptions}
                placeholder="select"
                name="location_name"
                className="hide-default"
                components={{ DropdownIndicator }}
                required
              ></Select>
            </label>

            <label>
              <span>Link URL</span>
              <input
                ref={urlInputRef}
                type="text"
                placeholder=""
                name="link_url"
              />
            </label>

            <label>
              <span>Slect image</span>
              <Select
                ref={imageInputRef}
                options={imageOptions}
                placeholder="select"
                name="thumb"
                className="hide-default"
                components={{ DropdownIndicator }}
                required
              ></Select>
            </label>

            <label>
              <span>Event details</span>
              <textarea
                ref={descriptionInputRef}
                type="text"
                placeholder=""
                name="event_details"
                rows={5}
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
          // className="modal-success"
        >
          <div className="close">
            <IoIosClose size={40} color={"#6c6666"} onClick={closeModal} />
          </div>
          <div className="check-success">
            <MdDoneAll size={52} color={"#fe0000"} />
            <p>Success</p>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default CreateEvent;

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
