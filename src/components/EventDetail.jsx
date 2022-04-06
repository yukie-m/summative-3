import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "../css/eventDetail.scss";
import CommentsList from "./CommentsList";
import CommentAdd from "./CommentAdd";
import { IoLocationSharp } from "react-icons/io5";
import { FiThumbsUp } from "react-icons/fi";
import { BiCommentDetail, BiLink } from "react-icons/bi";

import NoImage from "./NoImage";

function EventDetail() {
  let navigate = useNavigate();
  let location = useLocation();
  const [eventObject, setEventObject] = useState({});
  const [comments, setComments] = useState([]);
  //   console.log(location);

  useEffect(() => {
    loadEventDetails();
  }, []);

  const onGoBack = (event) => {
    navigate(-1);
  };
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
            setComments(response.data.comments.reverse());
          }
        });
    }
  };

  const addComment = (newComment) => {
    setComments([newComment, ...comments]);
  };

  return (
    <div className="detail-wrapper">
      <div>
        {eventObject.thumb ? (
          <img className="event-image" src={`./images/${eventObject.thumb}`} />
        ) : (
          <img src="./images/noPhoto.png" />
        )}
      </div>

      <div className="title">
        <h2> {eventObject.title}</h2>
      </div>
      <div className="flex items-center gap-10">
        <div className="event-category">{eventObject.category}</div>
        <div className="event-location">
          <IoLocationSharp color="teal" />
          {eventObject.location}
        </div>
      </div>
      <div className="flex items-center gap-10">
        <div className="event-date">{eventObject.date}</div>
        <div className="event-comments">
          <BiCommentDetail />({comments.length})
        </div>
        <div className="event-likes">
          <FiThumbsUp />
          (12)
        </div>
      </div>
      <div className="event-host">Organizer: {eventObject.host}</div>
      <div className="event-description">
        <p>{eventObject.description}</p>
      </div>

      <div className="event-link">
        <a href={eventObject.link}>
          <BiLink />
          Website Link
        </a>
      </div>

      <CommentsList commentsArray={comments} />
      <CommentAdd detailsObj={{ eventObject }} handleAdd={addComment} />

      <button onClick={onGoBack} className="button-orange" role="submit">
        Go Back
      </button>
    </div>
  );
}

export default EventDetail;
