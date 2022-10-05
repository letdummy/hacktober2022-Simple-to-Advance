import React, { useState, useEffect } from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import { getPlacesData } from "./api/index";
import Header from "./components/Header/Header.jsx";
import Map from "./components/Map/Map";
import List from "./components/List/List";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";

const App = () => {
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setfilteredPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
        // console.log(coordinates);
      }
    );
  }, []);

  useEffect(() => {
    const filteredPlaces = places.filter((place) => place.rating > rating);
    setfilteredPlaces(filteredPlaces);
  }, [rating]);

  useEffect(() => {
    setIsLoading(true);
    if (bounds == null) {
      console.log("hello");
    } else {
      getPlacesData(type, bounds.ne, bounds.sw).then((data) => {
        setPlaces(data?.filter((place)=>place.name && place.num_reviews > 0));
        setfilteredPlaces([]);
        setIsLoading(false);
      });
    }
  }, [type, coordinates, bounds]);

  return (
    <>
      <CssBaseline />
      <Header setCoordinates={setCoordinates} />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List
            places={filteredPlaces.length?filteredPlaces:places}
            childClicked={childClicked}
            isLoading={isLoading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={filteredPlaces.length?filteredPlaces:places}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
