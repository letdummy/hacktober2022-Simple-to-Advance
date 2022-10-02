import React from "react";
import "./sidebar.css";
import SidebarRow from "./SidebarRow";
import { EmojiFlags, LocalHospital, Store } from "@mui/icons-material";
import { People } from "@mui/icons-material";
import ChatIcon from "@mui/icons-material/Chat";
import Storefront from "@mui/icons-material/Storefront";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import ExpandMore from "@mui/icons-material/ExpandMore";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow
        title="Nischal Gautam"
        src="https://scontent.fbhr1-1.fna.fbcdn.net/v/t39.30808-6/274582343_652139496031984_5248764431522065930_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=dr1eZ-lpu2kAX9gtvNp&_nc_ht=scontent.fbhr1-1.fna&oh=00_AT9250rGhT0wXG61tBucKNqps6yrHauhKf_tPHCtvoqaAQ&oe=6314426C"
      />
      <SidebarRow title="COVID-19 Information Center" Icon={LocalHospital} />
      <SidebarRow title="Pages" Icon={EmojiFlags} />
      <SidebarRow title="Friends" Icon={People} />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={Storefront} title="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMore} title="See More" />
    </div>
  );
}

export default Sidebar;
