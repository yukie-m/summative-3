import React from "react";
import "../css/comments.scss";
import { MdAccountCircle } from "react-icons/md";

function CommentItem({ comment }) {
  return (
    <div className="comment-card">
      <div className="">
        <div className="comment-userthumb">
          <MdAccountCircle size={70} className="icon" />
        </div>
        <div className="comment-username">{comment.userName}</div>
      </div>
      <div className="comment-text">{comment.text}</div>
    </div>
  );
}

export default CommentItem;
