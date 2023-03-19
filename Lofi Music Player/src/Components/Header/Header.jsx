import React from "react";
import DrawerComp from "../ DrawerComp";

function Header({ setCurrSong, clickHandler,setIsPlaying }) {
  return (
    <div>
      <nav className="nav-bar" style={style.navBar}>
        <DrawerComp setCurrSong={setCurrSong} clickHandler={clickHandler} setIsPlaying={setIsPlaying} />
        <h1 style={style.logo}>Lofi Music Player</h1>
      </nav>
    </div>
  );
}

const style = {
  navBar: {
    display: "flex",
    padding: "1rem",
    fontFamily: "DynaPuff, cursive",
    fontSize: "1.4rem",
  },
  logo: {
    margin: "auto",
  },
};

export default Header;
