import React from "react";
import axios from "axios";
import Modal from "react-modal";
import { useState } from "react";
import { AiOutlineComment } from "react-icons/ai";
import { FiThumbsUp } from "react-icons/fi";
import { MdDoneAll } from "react-icons/md";
import "../css/deletetion.scss";

import NoImage from "./NoImage";

function DeleteSingleEvent(props) {
  const [showPopup, setShowPopup] = useState(false);

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

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
          setIsOpen(true);
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
                <AiOutlineComment size={18} />
                <p>{props.detailsObj.comments.length}</p>
              </div>
              <div className="thumb-icon flex-row">
                <FiThumbsUp size={17} />
                <p>{props.detailsObj.likes}</p>
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
        <div className="check-deleted">
          <p>Deleted</p>
          <MdDoneAll size={52} color={"#006ba6"} />
        </div>
      </Modal>
    </>
  );
}

export default DeleteSingleEvent;
