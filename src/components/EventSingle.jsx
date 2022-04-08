import React from "react";
import "../css/card.scss";
import { useNavigate } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { FiThumbsUp } from "react-icons/fi";
import { BiCommentDetail, BiLink } from "react-icons/bi";
import NoImage from "./NoImage";

function EventSingle({ detailsObj }) {
  const navigate = useNavigate();

  if (!detailsObj.thumb) {
    console.log(">> no img for ", detailsObj.title);
  } else {
    console.log(">> image == ", detailsObj.thumb);
  }
  return (
    <div
      className="event-card"
      href=""
      onClick={() => {
        navigate("/event-detail", { state: detailsObj._id });
      }}
    >
      <div className="event-thumbnail">
        {detailsObj.thumb ? (
          <img src={`./images/${detailsObj.thumb}`} />
        ) : (
          <img src="./images/noPhoto.png" />
        )}
      </div>
      <div className="event-details">
        <h2 className="event-name">{detailsObj.title} </h2>
        <div className="event-category">{detailsObj.category}</div>
        <div className="date-location">
        <div className="event-date">
          {detailsObj.date ? detailsObj.date : <p>TBD</p>}
        </div>
        <div className="event-location">
          <IoLocationSharp className="location-icon"/>
          {detailsObj.location}
        </div>
        </div>
        <div className="flex space-between">
          <div className="event-comments">
            <BiCommentDetail />
            ({detailsObj.comments.length})
          </div>
          <div className="event-likes">
            <FiThumbsUp />
            (12)
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventSingle;
