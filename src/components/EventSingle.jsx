import React from "react";
import "../css/card.scss";
import { useNavigate } from "react-router-dom";
import NoImage from "./NoImage";

function EventSingle(props) {
  console.log(props);
  const navigate = useNavigate();

  if (!props.detailsObj.thumb) {
    console.log(">> no img for ", props.detailsObj.title);
  } else {
    console.log(">> image == ", props.detailsObj.thumb);
  }
  return (
    <div
      className="event-card"
      href=""
      onClick={() => {
        navigate("/event-detail", { state: props.detailsObj._id });
      }}
    >
      <div className="event-thumbnail">
        {props.detailsObj.thumb ? (
          <img src={`./images/${props.detailsObj.thumb}`} />
        ) : (
          <img src="./images/noPhoto.png" />
        )}
      </div>
      <div className="event-details">
        <h2 className="event-name">{props.detailsObj.title} </h2>
        <div className="event-category">{props.detailsObj.category}</div>
        <div className="flex space-between">
          <div className="event-date">
            {props.detailsObj.date ? props.detailsObj.date : <p>TBD</p>}
          </div>
          <div className="event-location">{props.detailsObj.location}</div>
        </div>
        <div className="flex space-between">
          <div className="event-comments">12</div>
          <div className="event-likes">15</div>
        </div>
      </div>
    </div>
  );
}

export default EventSingle;
