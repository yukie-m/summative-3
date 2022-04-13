import React from "react";
import { useState } from "react";
import axios from "axios";
import Button from "./shared/Button";

function CommentAdd({ detailsObj, handleAdd }) {
  console.log(detailsObj.eventObject);
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if ((text !== "") & (text.trim().length <= 10)) {
      setBtnDisabled(true);
      setMessage("Comments must be at least 10 characters");
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }

    setText(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim().length > 10) {
      let formData = {
        text: text,
        userName: "Test User",
      };

      console.table(formData);
      axios
        .post(
          `//localhost:4000/api/create-comment/${detailsObj.eventObject._id}`,
          formData
        )
        .then((response) => {
          if (response.data.error) {
            console.log("ERRROR: " + response.data.error);
          } else {
            console.log("SUCCESS, COMMENT CREATED");
            handleAdd(formData);
          }
        });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            name=""
            id=""
            placeholder="Comment here..."
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Submit
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </div>
  );
}

export default CommentAdd;
