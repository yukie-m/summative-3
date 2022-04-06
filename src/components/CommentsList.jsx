import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import CommentItem from "./CommentItem";

function CommentsList({ commentsArray }) {
  if (!commentsArray || commentsArray.length === 0) {
    return <p>No Comments Yet</p>;
  }

  return (
    <div className="comments-list">
      <AnimatePresence>
        {commentsArray.map((comment, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <CommentItem key={index} comment={comment} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default CommentsList;
