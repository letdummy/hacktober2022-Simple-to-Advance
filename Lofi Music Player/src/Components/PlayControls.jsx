import React from "react";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import FastForwardIcon from "@mui/icons-material/FastForward";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import { Box } from "@mui/material";

function PlayControls({
  clickHandler,
  isPlaying,
  playNextSong,
  playPreSong,
  currPlayingSongData,
}) {
  const currSongId = currPlayingSongData.id;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <FastRewindIcon
        onClick={() => playPreSong(currSongId)}
        sx={{ fontSize: "5rem" }}
      />
      {isPlaying ? (
        <PauseCircleOutlineIcon
          sx={{ fontSize: "5rem" }}
          onClick={() => clickHandler()}
        />
      ) : (
        <PlayCircleOutlineIcon
          sx={{ fontSize: "5rem" }}
          onClick={() => clickHandler()}
        />
      )}
      <FastForwardIcon
        onClick={() => playNextSong(currSongId)}
        sx={{ fontSize: "5rem" }}
      />
    </Box>
  );
}

export default PlayControls;
