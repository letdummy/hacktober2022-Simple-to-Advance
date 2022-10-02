import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Row from "./Row";
import "./App.css";
import requests from "./requests";
import Banner from "./Banner";
import Navbar from "./Navbar";
//4f5d97dc17e4bdcbc7b4ce5733ad0e28
function App() {
  return (
    <div className="App">
      <Banner />
      <Navbar />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Fantasy" fetchUrl={requests.fetchFantasy} />
    </div>
  );
}

export default App;
