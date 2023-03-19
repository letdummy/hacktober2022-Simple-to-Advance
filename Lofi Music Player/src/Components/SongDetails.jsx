import React from "react";

function SongDetails({songName, songDisc}) {
  return (
    <>
      <div style={coustemStyle.musicText}>
        <h3>{songName}</h3>
        <p>{songDisc}</p>
      </div>
    </>
  );
}

const coustemStyle = {
  musicText: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem 0",
  },
};

export default SongDetails;
