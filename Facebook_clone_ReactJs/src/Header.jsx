import React from "react";
import "./header.css";

import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import FlagIcon from "@mui/icons-material/Flag";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import { Avatar } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ForumIcon from "@mui/icons-material/Forum";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/900px-Facebook_Logo_%282019%29.png"
          alt="facebook logo"
        />
        <div className="header__input">
          <SearchIcon style={{ fill: "grey" }} />
          <input type="text" placeholder="Search with Facebook" />
        </div>
      </div>
      <div className="header__middle">
        <div className="header__middle--active">
          <HomeIcon fontSize="large" />
        </div>
        <FlagIcon fontSize="large" />
        <SubscriptionsIcon fontSize="large" />
        <StorefrontIcon fontSize="large" />
        <SupervisedUserCircleIcon fontSize="large" />
      </div>
      <div className="header__right">
        <Avatar
          src={
            "https://scontent.fbhr1-1.fna.fbcdn.net/v/t39.30808-6/274582343_652139496031984_5248764431522065930_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=dr1eZ-lpu2kAX_atTUq&_nc_ht=scontent.fbhr1-1.fna&oh=00_AT_ZXCw2yvpEzOFbvkWVQAne-UWipdWcPbiQ5MSHK0Rfcw&oe=6314426C"
          }
        />
        <h4>Nischal Gautam</h4>
        <AddIcon fontSize="medium" />
        <ForumIcon fontSize="medium" />
        <NotificationsActiveIcon fontSize="medium" />
        <ExpandMoreIcon fontSize="medium" />
      </div>
    </div>
  );
}

export default Header;
