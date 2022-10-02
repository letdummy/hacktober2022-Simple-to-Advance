import React from "react";
import "./feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import { useState } from "react";
import Post from "./Post";
function Feed() {
  const [postData, setData] = useState(false);
  console.log(postData);
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender setState={setData} />
      {postData && <Post {...postData} />}
      <Post
        title={"Paras Khadka"}
        time={"22min"}
        profilePic="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/321700/321749.png"
        message="Back in the field"
        image="https://english.nepalpress.com/wp-content/uploads/2021/08/paras-77.jpg"
        likeCount="11"
      />
      <Post
        title={"Elon Musk"}
        time={"1hr"}
        profilePic="https://d1e00ek4ebabms.cloudfront.net/production/e7ae4220-1401-4c15-b6f1-36453e9721ab.jpg"
        message="Another One to the Space"
        image="https://media.wired.com/photos/5ed2b8129948303154121fe5/master/pass/Science_SpaceX-Launch-AP_20151700829737.jpg"
        likeCount="1M"
      />
    </div>
  );
}

export default Feed;
