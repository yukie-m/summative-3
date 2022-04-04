import axios from "axios";
import { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../css/form.scss";
import { MdArrowBack } from "react-icons/md";

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
          console.log("SUCCESS, UPDATE USER");
        }
      });
  };

  return (
    <>
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
            <select
              ref={categoryInputRef}
              placeholder="select"
              name="category_name"
              required
            >
              <option value="Business">Business</option>
              <option value="Finance">Finance</option>
              <option value="IT">IT</option>
              <option value="Engineer">Engineer</option>
            </select>
          </label>

          <label>
            <span>Location</span>
            <select
              ref={locationInputRef}
              placeholder="select"
              name="location_name"
              required
            >
              <option value="Auckland">Auckland</option>
              <option value="Wellington">Wellington</option>
              <option value="Christchurch">Christchurch</option>
              <option value="Virtual">Virtual</option>
            </select>
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
            <span>Upload image</span>
            <select
              ref={imageInputRef}
              placeholder="select"
              name="thumb"
              required
            >
              <option value="business.jpg">Business</option>
              <option value="finance.jpg">Finance</option>
              <option value="it.jpg">IT</option>
              <option value="enginner.jpg">Enginner</option>
              <option value="women.jpg">Women</option>
              <option value="noPhoto.png">No Photo</option>
            </select>
          </label>

          <label>
            <span>Event details</span>
            <textarea
              ref={descriptionInputRef}
              type="text"
              placeholder=""
              name="event_details"
              required
            />
          </label>
          <button role="submit">Create</button>
        </form>
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
