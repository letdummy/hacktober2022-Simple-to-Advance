import React from "react";
import "./storyreel.css";
import Story from "./Story";
import { useState } from "react";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        title="Google"
        profileSrc="https://blog.hubspot.com/hubfs/image8-2.jpg"
        image="https://upload.wikimedia.org/wikipedia/commons/3/32/Googleplex_HQ_%28cropped%29.jpg"
      />
      <Story
        title="Elon Musk"
        profileSrc="https://d1e00ek4ebabms.cloudfront.net/production/e7ae4220-1401-4c15-b6f1-36453e9721ab.jpg"
        image="https://assets.vogue.in/photos/6018cae2a932a492c643a835/2:3/w_2560%2Cc_limit/Elon-Musk-Clubhouse-vogue-010221-credit-Getty-Images3.jpg"
      />
      <Story
        title="Samay Raina"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEBuu-Pmd42iem2WDuB7f418AJWt4Zv_pSiQ&usqp=CAU"
        profileSrc="https://yt3.ggpht.com/ytc/AMLnZu9AX4z4x5mEw7IDxPyR7H84tF1eo2gXzDiQcbJScQ=s900-c-k-c0x00ffffff-no-rj"
      />
      <Story
        title="Tanmay Bhat"
        profileSrc="https://yt3.ggpht.com/ytc/AMLnZu-2T7Bjkq2hhsjgqkleRwlQV46ApvMDdYvO0l40FA=s900-c-k-c0x00ffffff-no-rj"
        image="https://wallpaperaccess.com/full/3480667.jpg"
      />
      <Story
        title="Elon Musk"
        profileSrc="https://d1e00ek4ebabms.cloudfront.net/production/e7ae4220-1401-4c15-b6f1-36453e9721ab.jpg"
        image="https://assets.vogue.in/photos/6018cae2a932a492c643a835/2:3/w_2560%2Cc_limit/Elon-Musk-Clubhouse-vogue-010221-credit-Getty-Images3.jpg"
      />
    </div>
  );
}

export default StoryReel;
