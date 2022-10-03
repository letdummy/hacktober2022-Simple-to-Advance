import React from "react";
import { Avatar } from "@mui/material";
import "./SidebarRow.css";

function SidebarRow(props) {
  return (
    <div className="sidebarRow">
      {props.src && <Avatar src={props.src} />}
      {props.Icon && <props.Icon />}
      <h4>{props.title}</h4>
    </div>
  );
}

export default SidebarRow;
