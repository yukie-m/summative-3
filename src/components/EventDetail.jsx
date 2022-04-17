import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "../css/eventDetail.scss";
import CommentsList from "./CommentsList";
import CommentAdd from "./CommentAdd";
import { IoLocationSharp } from "react-icons/io5";
import { FiThumbsUp } from "react-icons/fi";
import { BiLink } from "react-icons/bi";
import { AiOutlineComment } from "react-icons/ai";
import { BsShareFill } from "react-icons/bs";
import { MdArrowBack } from "react-icons/md";
import { useSelector } from "react-redux";
import { BiBookmark } from "react-icons/bi";

function EventDetail() {
  const { user } = useSelector((state) => state.auth);
  let navigate = useNavigate();
  let location = useLocation();
  const [eventObject, setEventObject] = useState({});
  const [comments, setComments] = useState([]);
  //   console.log(location);
  const [likes, setLikes] = useState([]);

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
            setLikes(response.data.likes);
          }
        });
    }
  };

  const updateLikes = (event) => {
    axios
      .patch(`//localhost:4000/api/add-like/${eventObject._id}`, {
        action: "up",
      })
      .then((response) => {
        setLikes(response.data.likes);
      });
  };

  const addComment = (newComment) => {
    setComments([newComment, ...comments]);
  };

  return (
    <div>
      <div onClick={onGoBack} className="back-button" role="submit">
        <MdArrowBack className="back-arrow" />
      </div>
      <div className="detail-wrapper">
        <div>
          <div className="bookmark">
            <BiBookmark className="bookmark-icon" />
          </div>
          {eventObject.thumb ? (
            <img
              className="event-image"
              src={`./images/${eventObject.thumb}`}
            />
          ) : (
            <img src="./images/noPhoto.png" />
          )}
        </div>

        <div className="title">
          <h3> {eventObject.title}</h3>
        </div>
        <div className="flex items-center gap-10">
          <div className="event-category">{eventObject.category}</div>
          <div className="event-location">
            <IoLocationSharp className="event-location-icon" />
            {eventObject.location}
          </div>
        </div>
        <div className="flex items-center gap-10">
          <div className="event-date">{eventObject.date}</div>
          <div className="event-comments">
            <AiOutlineComment size={21} />({comments.length})
          </div>
          <div className="event-likes">
            <FiThumbsUp
              size={19}
              onClick={updateLikes}
              // className={`${loading ? "animate-heart" : ""}`}
            />
            ({likes})
          </div>
          <div className="event-share">
            <BsShareFill size={14} />
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

        <div className="border-bottom"></div>

        <CommentsList commentsArray={comments} />
        {user ? (
          <CommentAdd detailsObj={{ eventObject }} handleAdd={addComment} />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default EventDetail;
