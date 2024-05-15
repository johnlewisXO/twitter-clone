import React, { forwardRef, useState } from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PublishIcon from "@material-ui/icons/Publish";
import Comments from "./Comments"; // Import the Comments component

const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar }, ref) => {
    const [liked, setLiked] = useState(false);
    const [retweeted, setRetweeted] = useState(false);

    const handleLike = () => {
      setLiked(!liked);
    };

    const handleRetweet = () => {
      setRetweeted(!retweeted);
    };

    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}{" "}
                <span className="post__headerSpecial">
                  {verified && <VerifiedUserIcon className="post__badge" />} @
                  {username}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt="" />
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            {retweeted ? (
              <RepeatIcon fontSize="small" style={{ color: "green" }} onClick={handleRetweet} />
            ) : (
              <RepeatIcon fontSize="small" onClick={handleRetweet} />
            )}
            {liked ? (
              <FavoriteIcon fontSize="small" onClick={handleLike} />
            ) : (
              <FavoriteBorderIcon fontSize="small" onClick={handleLike} />
            )}
            <PublishIcon fontSize="small" />
          </div>
        </div>
        <Comments postId={username} />
      </div>
    );
  }
);

export default Post;
