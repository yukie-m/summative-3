import React from "react";
import axios from "axios";
import { useState } from "react";
import { AiOutlineComment } from "react-icons/ai";
import { FiThumbsUp } from "react-icons/fi";
import "../css/deletetion.scss";

import NoImage from "./NoImage";

function DeleteSingleEvent(props) {
  const [showPopup, setShowPopup] = useState(false);

  const cancelDeletion = () => {
    console.log("cancelDeletion");
    setShowPopup(false);
  };

  const onDeleteEvent = (theID) => {
    console.log(theID);
    setShowPopup(false);

    axios
      .delete(`http://localhost:4000/api/delete-event-by-id/${theID}`)
      .then((response) => {
        console.log(response);
        let isDeleted = response.data.deletedCount;
        if (isDeleted) {
          console.log("SUCCESS, DELETED = ", response.data.deletedCount);
          // now reload the view
          props.reloadEvents();
        } else {
          console.log(
            "FAILED TO DELETE, DELETED = ",
            response.data.deletedCount
          );
        }
      });
  };

  return (
    <>
      <div className="card">
        {showPopup && (
          <dialog className="delete-popup" open>
            <div className="dialog-wrapper">
              <p>Are you sure to delete?</p>
              <div className="btn">
                <button
                  id="confirmBtn"
                  value="default"
                  onClick={() => {
                    onDeleteEvent(props.detailsObj._id);
                  }}
                  className="delete-btn"
                >
                  Delete
                </button>
                <button
                  value="cancel"
                  onClick={cancelDeletion}
                  className="cancel-btn"
                >
                  Cancel
                </button>
              </div>
            </div>
          </dialog>
        )}
        <div className="event-wrapper">
          <header>
            <h4>{props.detailsObj.title}</h4>
          </header>
          {/* {props.detailsObj.thumb ? (
        <img src={`./images/${props.detailsObj.thumb}`} />
      ) : (
        <img src="./images/noPhoto.png" />
      )} */}
          <div className="second-row">
            <div className="listed-date">
              <span>Listed:</span>
              <p>{new Date(props.detailsObj.createdAt).toDateString()}</p>
            </div>
            <div className="icons flex-row">
              <div className="comment-icon flex-row">
                <AiOutlineComment size={22} />
                <p>(12)</p>
              </div>
              <div className="thumb-icon flex-row">
                <FiThumbsUp size={22} />
                <p>(12)</p>
              </div>
            </div>
            <div className="delete-edit flex-row">
              <button
                href=""
                onClick={() => {
                  setShowPopup(true);
                }}
              >
                <p>Delete</p>
              </button>
              <p>/</p>
              <button>
                <p>Edit</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeleteSingleEvent;
