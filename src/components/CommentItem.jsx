import React from "react";
import "../css/comments.scss";
import { MdAccountCircle } from "react-icons/md";

function CommentItem({ comment }) {
  const profileThumbURL = "../images/" + comment.userThumb + ".jpg";
  return (
    <div className="comment-card">
      <div className="">
        <div className="comment-userthumb">
          {comment.userThumb ? (
            <img src={profileThumbURL} />
          ) : (
            <MdAccountCircle size={50} className="icon" />
          )}
        </div>
        <div className="comment-username">{comment.userName}</div>
      </div>
      <div className="comment-text">{comment.text}</div>
    </div>
  );
}

export default CommentItem;
