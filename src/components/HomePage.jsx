import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import PresentCard from "./PresentCard";
import FiveDayForecast from "./FiveDayForecast";
import MainCard from "./MainCard";
import { useBasicGetApi } from "../store/customHook";
import ToggleUnitCard from "./ToggleUnitCard";

const useDebouncedValue = (inputValue, delay) => {
  const [debounceValue, setDebouncedValue] = useState(inputValue ?? "");
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [inputValue, delay]);
  return debounceValue;
};

const HomePage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [longitudeLatitude, setLongitudeLatitude] = useState({
    lat: null,
    lon: null,
  });
  const [location, setLocation] = useState("");
  const debouncedSearchTerm = useDebouncedValue(location, 600);

  // Get user's current location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setLongitudeLatitude({ lat: latitude, lon: longitude });
      });
    }
  }, []);

  // Fetch weather data based on location or longitude and latitude
  const queryParam = debouncedSearchTerm
    ? debouncedSearchTerm
    : longitudeLatitude.lat && longitudeLatitude.lon
    ? `${longitudeLatitude.lat},${longitudeLatitude.lon}`
    : "auto:ip";

  const getData = useBasicGetApi({
    path: `/forecast.json?q=${queryParam}&days=6&aqi=yes&wind100kph=yes`,
  });

  console.log(getData?.isFetching);
  return (
    <Box>
      <Navbar setLocation={setLocation} isFetching={getData?.isFetching} />
      {isSmallScreen ? (
        <>
          <ToggleUnitCard data={getData} />
          <PresentCard data={getData} />
          <MainCard data={getData} />
          <FiveDayForecast data={getData} />
        </>
      ) : (
        <Grid
          container
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Grid
            item
            xs={3.8}
            sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <PresentCard data={getData} />
            <FiveDayForecast data={getData} />
          </Grid>
          <Grid item xs={8}>
            <MainCard data={getData} />
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default HomePage;
