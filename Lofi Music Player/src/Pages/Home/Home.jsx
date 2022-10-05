import React, { useState, useRef, useEffect } from "react";
import Header from "../../Components/Header/Header";
import kya_mujhe_pyaar from "../../Assets/Music/ky-mujhe-pyar-hai.mpeg";
import Aaja_Mahiya from "../../Assets/Music/Aaja-Mahiya.mpeg";
import dil_ko from "../../Assets/Music/Dil-ko-Karar-aaya.mpeg";
import SongImg from "../../Components/SongImg";
import SongDetails from "../../Components/SongDetails";
import PlayControls from "../../Components/PlayControls";
import pee_loon from "../../Assets/Music/Pee-loon.mpeg";
import arcade from "../../Assets/Music/Arcade.mpeg";
import tumse_hi from "../../Assets/Music/Tumse-hi.mpeg";
import mast_magan from "../../Assets/Music/Mast-Magan.mpeg";
import ContinuousSlider from "../../Components/ VolumeComp";
import FavoriteIcon from "@mui/icons-material/Favorite";
export const data = [
  {
    id: 1,
    name: "Kya Mujhe Slowed & Reverb",
    song: kya_mujhe_pyaar,
    desc: "Slowed Kya mujhe pyaar by KK",
    img: "https://i1.sndcdn.com/artworks-Jc5yJMyre7kVrzhj-fbdDxg-t500x500.jpg",
  },

  {
    id: 2,
    name: "Aaja Mahiya",
    song: Aaja_Mahiya,
    desc: "RHTDM flute music",
    img: "https://e.snmc.io/i/600/s/2ec8e59df7a0aa03ddac46a99fb995d3/8496108/montell-fish-bedroom-lofi-Cover-Art.jpg",
  },

  {
    id: 3,
    name: "Dil ko Karaar",
    song: dil_ko,
    desc: "Dil ko karaar slowed and reverb",
    img: "https://i.scdn.co/image/ab67616d0000b2738cf47bc256b732a9467e61bb",
  },
  {
    id: 4,
    name: "Pee loon",
    song: pee_loon,
    desc: "Pee loon Lofi",
    img: "https://e.snmc.io/i/600/s/2ec8e59df7a0aa03ddac46a99fb995d3/8496108/montell-fish-bedroom-lofi-Cover-Art.jpg",
  },
  {
    id: 5,
    name: "Arcade",
    song: arcade,
    desc: "Arcade Lofi",
    img: "https://i1.sndcdn.com/artworks-h37XMNbMHw7mtQIy-E7g6YA-t500x500.jpg",
  },
  {
    id: 6,
    name: "Tumse hi",
    song: tumse_hi,
    desc: "Tumse hi Lofi",
    img: "https://angartwork.akamaized.net/?id=143539604&size=640",
  },
  {
    id: 7,
    name: "Arjit Singh Lofi",
    song: mast_magan,
    desc: "Lofi Songs by Arjit Singh",
    img: "https://i1.sndcdn.com/artworks-h37XMNbMHw7mtQIy-E7g6YA-t500x500.jpg",
  },
];
function Home() {
  const [currSong, setCurrSong] = useState(data[0]);
  const audioRef = useRef(new Audio(currSong.song));
  const [isPlaying, setIsPlaying] = useState(true);

  const playNextSong = (id) => {
    if (id <= data.length - 1) {
      setCurrSong(data[id]);
    } else {
      setCurrSong(data[0]);
    }
    setIsPlaying(true);
  };
  const playPreSong = (id) => {
    if (id - 1 == 0) {
      setCurrSong(data[data.length - 1]);
    } else {
      setCurrSong(data[id - 2]);
    }
    setIsPlaying(true);
  };
  const playSong = () => {
    audioRef.current.play();
  };
  const pauseSong = () => {
    audioRef.current.pause();
  };
  const clickHandler = () => {
    if (!isPlaying) {
      playSong();
    } else {
      pauseSong();
    }
    setIsPlaying(!isPlaying);
  };
  const endSong = function () {
    setIsPlaying(false);
    playNextSong(currSong.id);
  };

  return (
    <div>
      <Header
        setCurrSong={setCurrSong}
        clickHandler={clickHandler}
        setIsPlaying={setIsPlaying}
      />
      <div style={customStyle.container}>
        <SongImg img={currSong.img} />
        <SongDetails songName={currSong.name} songDisc={currSong.desc} />
        <ContinuousSlider audioRef={audioRef} />
        <PlayControls
          isPlaying={isPlaying}
          clickHandler={clickHandler}
          playNextSong={playNextSong}
          playPreSong={playPreSong}
          currPlayingSongData={currSong}
        />
      </div>
      <audio
        ref={audioRef}
        src={currSong.song}
        autoPlay
        controls
        onEnded={endSong}
      />
    </div>
  );
}

const customStyle = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};
export default Home;
