import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./requests";
import banner from "./banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchata() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      const randomNumber = Math.floor(
        Math.random() * request.data.results.length - 1
      );
      setMovie(request.data.results[randomNumber]);

      return request;
    }
    fetchata();
  }, []);
  console.log(movie);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <header
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
      className="banner"
    >
      <div className="banner__contents">
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <p className="banner__description">{truncate(movie?.overview, 150)}</p>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;
