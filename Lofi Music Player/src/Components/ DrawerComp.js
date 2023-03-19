import React from "react";
import { useState } from "react";
import {
  Drawer,
  ListItemText,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { List, ListItem } from "@mui/material";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import { data } from "../Pages/Home/Home";

function DrawerComp({ setCurrSong, clickHandler, setIsPlaying }) {
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const drawerWidth = isMobile ? "80%" : "30%";
  return (
    <div>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        sx={{ width: "500px" }}
        PaperProps={{ sx: { width: drawerWidth, backgroundColor: "black" } }}
      >
        <List>
          <ListItem>
            <ListItemText >
              <h1 style={coustemStyle.playlist}>PlayList</h1>
            </ListItemText>
          </ListItem>
          {data.map((item, idx) => {
            return (
              <ListItem
                key={idx}
                onClick={() => {
                  setCurrSong(item);
                  clickHandler();
                  setOpenDrawer(false);
                  setIsPlaying(true);
                }}
              >
                <ListItemText>
                  <div style={coustemStyle.container}>
                    <img style={coustemStyle.img} src={item.img} />
                    <div style={coustemStyle.text}>
                      <h4>{item.name}</h4>
                    </div>
                  </div>
                </ListItemText>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <QueueMusicIcon sx={{ fontSize: "2.2rem" }} />
      </IconButton>
    </div>
  );
}

const coustemStyle = {
  container: {
    // border: "1px solid red",
    height: "80px",
    display: "flex",
    alignItems: "center",
  },
  img: {
    height: "80px",
    width: "80px",
    borderRadius: "5px",
  },
  text: {
    // border: '1px solid red',
    height: "100%",
    width: "100%",
    padding: "8px 10px",
    fontSize: "1.3rem",
  },
  playlist: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "DynaPuff, cursive",
  },
};

export default DrawerComp;
