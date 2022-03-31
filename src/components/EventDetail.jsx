import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import NoImage from "./NoImage";
// import CommentAdd from "./CommentAdd";
// import CommentsView from "./CommentsView";
// import { debugObj } from "../js/shared.js";

function EventDetail() {
  let navigate = useNavigate();
  let location = useLocation();
  const [eventObject, setEventObject] = useState({});

  //   console.log(location);

  useEffect(() => {
    loadComments();
  }, []);

  const onGoBack = (event) => {
    navigate(-1);
  };
  const loadComments = (event) => {
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
        <h5> {eventObject.title}</h5>
      </div>
      <div className="event-category">
        <p> {eventObject.category}</p>
      </div>
      <div className="event-date">{eventObject.date}</div>
      <div className="event-location">{eventObject.location}</div>
      <div className="event-host">Organised by {eventObject.host}</div>

      <div className="event-description">
        <p>{eventObject.description}</p>
      </div>

      <div className="event-link">
        <a href="{eventObject.link}">Website Link</a>
      </div>

      {/* <div className="all-comments">
        <CommentsView commentsArray={eventObject.comments} />
      </div> */}

      {/* <CommentAdd
        detailsObj={{ ...writerObject }}
        reloadComments={loadComments}
      /> */}
      {/* {!allowComments && <p>Login to comment</p>} */}

      <button onClick={onGoBack} className="button-orange" role="submit">
        Go Back
      </button>
    </div>
  );
}

export default EventDetail;
