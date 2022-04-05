import React from "react";
import axios from "axios";
import { useState } from "react";
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
    <div className="card">
      {showPopup && (
        <dialog className="delete-popup" open>
          <p>Are you sure to delete?</p>
          <button
            id="confirmBtn"
            value="default"
            onClick={() => {
              onDeleteEvent(props.detailsObj._id);
            }}
          >
            Delete
          </button>
          <button value="cancel" onClick={cancelDeletion}>
            Cancel
          </button>
        </dialog>
      )}

      <header>
        <h2>{props.detailsObj.title}</h2>
      </header>
      {props.detailsObj.thumb ? (
        <img src={`./images/${props.detailsObj.thumb}`} />
      ) : (
        <img src="./images/noPhoto.png" />
      )}
      <div>
        <p>{props.detailsObj.bedrooms}</p>
        <p>{props.detailsObj.accommodates}</p>
        <p>{props.detailsObj.property_type}</p>
        <p>{props.detailsObj.day_price}</p>
        <button
          href=""
          onClick={() => {
            setShowPopup(true);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default DeleteSingleEvent;
