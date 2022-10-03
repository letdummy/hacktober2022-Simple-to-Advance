import React from "react";
import "./messagesender.css";
import { Avatar } from "@mui/material";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import CollectionsIcon from "@mui/icons-material/Collections";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import Collections from "@mui/icons-material/Collections";
import { useState } from "react";
import { SettingsInputAntennaTwoTone } from "@mui/icons-material";
function MessageSender(props) {
  const [input, setInput] = useState({
    input1: "",
    imageUrl: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    setInput((prevInput) => {
      return {
        ...prevInput,
        [e.target.name]: e.target.value,
      };
    });
  }
  return (
    <div className="messegesender">
      <div className="messagesender__top">
        <Avatar
          src={
            "https://scontent.fbhr1-1.fna.fbcdn.net/v/t39.30808-6/274582343_652139496031984_5248764431522065930_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=dr1eZ-lpu2kAX_atTUq&_nc_ht=scontent.fbhr1-1.fna&oh=00_AT_ZXCw2yvpEzOFbvkWVQAne-UWipdWcPbiQ5MSHK0Rfcw&oe=6314426C"
          }
        />
        <form>
          <input
            value={input.input1}
            type="text"
            name="input1"
            onChange={handleSubmit}
            placeholder="What's on your mind?"
          />
          <input
            name="imageUrl"
            type="text"
            value={input.imageUrl}
            onChange={handleSubmit}
            placeholder="Image url (optional)"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              return props.setState({
                title: "Nischal Gautam",
                time: "Just now",
                profilePic:
                  "https://scontent.fbhr1-1.fna.fbcdn.net/v/t39.30808-6/274582343_652139496031984_5248764431522065930_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=SEJ_yOnQXrQAX-duA_A&_nc_ht=scontent.fbhr1-1.fna&oh=00_AT9Ob86ifXUrOCXGaW8wyCWMwF5JfJ7uHtPmH0CG3tk8Yg&oe=631836EC",
                message: input.input1,
                image: input.imageUrl,
                likeCount: "0",
              });
            }}
            type="submit"
          >
            Hidden Submit
          </button>
        </form>
      </div>
      <div className="messagesender__bottom">
        <div className="icons">
          <VideoCameraFrontIcon className="icon" style={{ fill: "green" }} />
          <h4>Live Video</h4>
        </div>
        <div className="icons">
          <Collections style={{ fill: "green" }} className="icon" />
          <h4>Photo/video</h4>
        </div>
        <div className="icons">
          <EmojiEmotionsIcon
            style={{ fill: "rgb(18, 222, 18)" }}
            className="icon"
          />
          <h4>Feeling/activity</h4>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
