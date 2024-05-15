import React, { useState } from "react";
import "./Comments.css";

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, newComment.trim()]);
      setNewComment("");
    }
  };

  return (
    <div className="comments">
      <div className="comments__container">
        <h3>Comments</h3>
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            <p>{comment}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleCommentSubmit} className="comments__form">
        <input
          type="text"
          placeholder="Share your thoughts on this post..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button type="submit">Post comment</button>
      </form>
    </div>
  );
};

export default Comments;
