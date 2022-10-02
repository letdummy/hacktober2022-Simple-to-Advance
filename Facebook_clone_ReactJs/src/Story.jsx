import React from "react";
import "./Story.css";
import { Avatar } from "@mui/material";
import { useState } from "react";

function Story(props) {
  const [seen, setSeen] = React.useState(false);
  console.log(seen);
  function toggle() {
    setSeen(true);
  }
  return (
    <div
      onClick={toggle}
      style={{ backgroundImage: `url(${props.image})` }}
      className={`story ${seen ? "seen" : "unseen"}`}
    >
      <Avatar className="story__avatar" src={props.profileSrc} />
      <h4>{props.title}</h4>
    </div>
  );
}

export default Story;
