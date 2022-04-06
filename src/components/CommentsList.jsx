import React from "react";
import CommentItem from "./CommentItem";

function CommentsList({ commentsArray }) {
  if (!commentsArray || commentsArray.length === 0) {
    return <p>No Comments Yet</p>;
  }

  return (
    <div className="comments-list">
      {commentsArray.map((comment, index) => (
        <CommentItem key={index} comment={comment} />
      ))}
    </div>
  );
}

export default CommentsList;
