import React from "react";
import "./feed.css";
import { Avatar } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import "./post.css";
import Public from "@mui/icons-material/Public";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import CommentIcon from "@mui/icons-material/Comment";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";

function Post(props) {
  const [liked, setLiked] = useState(false);
  function handleClick() {
    setLiked((prevliked) => !prevliked);
  }

  return (
    <div className="post">
      <div className="post__top">
        <div className="info">
          <Avatar src={props.profilePic} />
          <div className="name-time">
            <h4>{props.title}</h4>
            <div className="icon-time">
              <p>{props.time}</p>
              <Public
                style={{ fontSize: "14px", objectFit: "cover", fill: "gray" }}
              />
            </div>
          </div>
        </div>
        <div className="menu">
          <MoreHorizIcon style={{ fill: "black" }} />
        </div>
      </div>
      <div className="post__bottom">
        <p className="message">{props.message}</p>
      </div>
      <div className="post__image">
        {props.image && <img src={props.image} alt="" />}
      </div>
      <div className="likecount">
        <FavoriteIcon style={{ fill: "Red", fontSize: "26" }} />
        {liked ? (
          <p>You and {props.likeCount} others</p>
        ) : (
          <p>{props.likeCount}</p>
        )}
      </div>
      <div className="post__options">
        <div className="option" onClick={handleClick}>
          {liked ? (
            <ThumbUpAltIcon style={{ fill: "blue", fontSize: "29" }} />
          ) : (
            <ThumbUpOffAltIcon style={{ fill: "#65676b", fontSize: "26" }} />
          )}
          <h4>Like</h4>
        </div>
        <div className="option">
          <CommentIcon style={{ fill: "#65676b", fontSize: "26" }} />
          <h4>Comment</h4>
        </div>
        <div className="option">
          <SendIcon style={{ fill: "#65676b", fontSize: "26" }} />
          <h4>Share</h4>
        </div>
      </div>
    </div>
  );
}

export default Post;
