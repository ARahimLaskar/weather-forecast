import {
  Box,
  Card,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import sunrise from "../assets/sunrise.png";
import sunset from "../assets/sunset.png";
import moonrise from "../assets/moonrise.png";
import moonset from "../assets/moonset.png";
import AQI from "../assets/wind.png";
import humidity from "../assets/humidity.png";
import maxtemp from "../assets/maxtemp.png";
import mintemp from "../assets/mintemp.png";
import feelslike from "../assets/feelslike.png";
import pressure from "../assets/pressure.png";
import windPower from "../assets/wind-power.png";
import windDirection from "../assets/wind-direction.png";
import visibility from "../assets/visibility.png";
import uv from "../assets/uv.png";
import WeatherCard from "./WeatherCard";
import ToggleUnitCard from "./ToggleUnitCard";

function MainCard({ data }) {
  const tempUnit = useSelector((state) => state.settings.tempUnit);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const icons = {
    maxtemp: maxtemp,
    mintemp: mintemp,
    feelslike: feelslike,
    humidity: humidity,
    pressure: pressure,
    windPower: windPower,
    windDirection: windDirection,
    visibility: visibility,
    uv: uv,
  };
  return (
    <Box>
      {isSmallScreen ? null : <ToggleUnitCard data={data} />}
      <Grid
        item
        sx={{
          display: isSmallScreen ? "block" : "flex",
          gap: "10px",
          marginBottom: "10px",
        }}
      >
        <Grid item xs={5} sx={{ marginBottom: isSmallScreen && "4px" }}>
          <Card sx={{ width: "100%", height: "100%", padding: "20px" }}>
            <Typography sx={{ fontSize: theme.typography.secondaryFontSize }}>
              Sunrise And Sunset
            </Typography>
            <Grid
              sx={{
                display: "flex",
                alignItems: "self-end",
                justifyContent: "space-evenly",
              }}
            >
              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  style={{ width: "50px", margin: "15px 0px" }}
                  src={sunrise}
                />
                <Typography
                  sx={{ fontSize: theme.typography.tertiaryFontSize }}
                >{`${data?.data?.forecast?.forecastday[0]?.astro?.sunrise}`}</Typography>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  style={{ width: "40px", margin: "15px 0px" }}
                  src={sunset}
                />
                <Typography
                  sx={{ fontSize: theme.typography.tertiaryFontSize }}
                >{`${data?.data?.forecast?.forecastday[0]?.astro?.sunset}`}</Typography>
              </Grid>
            </Grid>
            <Divider sx={{ margin: "10px 0px" }} />
            <Typography sx={{ fontSize: theme.typography.secondaryFontSize }}>
              Moonrise And Moonset
            </Typography>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "self-end",
              }}
            >
              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  style={{ width: "50px", margin: "15px 0px" }}
                  src={moonrise}
                />
                <Typography
                  sx={{ fontSize: theme.typography.tertiaryFontSize }}
                >{`${data?.data?.forecast?.forecastday[0]?.astro?.moonrise}`}</Typography>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  style={{ width: "50px", margin: "15px 0px" }}
                  src={moonset}
                />
                <Typography
                  sx={{ fontSize: theme.typography.tertiaryFontSize }}
                >{`${data?.data?.forecast?.forecastday[0]?.astro?.moonset}`}</Typography>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={7}>
          <Card
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "20px",
            }}
          >
            <Typography sx={{ fontSize: theme.typography.secondaryFontSize }}>
              Air Quality Index
            </Typography>
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img style={{ width: "50px", margin: "15px 0px" }} src={AQI} />
            </Grid>

            <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
              <Grid>
                <Grid
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <Typography
                    sx={{ fontSize: theme.typography.tertiaryFontSize }}
                  >
                    CO
                  </Typography>
                  <Typography
                    sx={{ fontSize: theme.typography.tertiaryFontSize }}
                  >{`${data?.data?.current?.air_quality?.co} µg/m³`}</Typography>
                </Grid>
                <Grid
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    paddingTop: "10px",
                  }}
                >
                  <Typography
                    sx={{ fontSize: theme.typography.tertiaryFontSize }}
                  >
                    NO₂
                  </Typography>
                  <Typography
                    sx={{ fontSize: theme.typography.tertiaryFontSize }}
                  >{`${data?.data?.current?.air_quality?.no2} µg/m³`}</Typography>
                </Grid>
              </Grid>
              <Grid>
                <Grid
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <Typography
                    sx={{ fontSize: theme.typography.tertiaryFontSize }}
                  >
                    SO₂
                  </Typography>
                  <Typography
                    sx={{ fontSize: theme.typography.tertiaryFontSize }}
                  >{`${data?.data?.current?.air_quality?.so2} µg/m³`}</Typography>
                </Grid>
                <Grid
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    paddingTop: "10px",
                  }}
                >
                  <Typography
                    sx={{ fontSize: theme.typography.tertiaryFontSize }}
                  >
                    O₃
                  </Typography>
                  <Typography
                    sx={{ fontSize: theme.typography.tertiaryFontSize }}
                  >{`${data?.data?.current?.air_quality?.o3} µg/m³`}</Typography>
                </Grid>
              </Grid>

              <Grid>
                <Grid
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <Typography
                    sx={{ fontSize: theme.typography.tertiaryFontSize }}
                  >
                    PM2.5
                  </Typography>
                  <Typography
                    sx={{ fontSize: theme.typography.tertiaryFontSize }}
                  >{`${data?.data?.current?.air_quality?.pm2_5} µg/m³`}</Typography>
                </Grid>
                <Grid
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    paddingTop: "10px",
                  }}
                >
                  <Typography
                    sx={{ fontSize: theme.typography.tertiaryFontSize }}
                  >
                    PM10
                  </Typography>
                  <Typography
                    sx={{ fontSize: theme.typography.tertiaryFontSize }}
                  >{`${data?.data?.current?.air_quality?.pm10} µg/m³`}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>

      <Grid sx={{ display: "flex", gap: "10px" }}>
        <Card sx={{ width: "100%", padding: "20px" }}>
          <WeatherCard
            title="Max Temperature"
            icon={icons.maxtemp}
            value={
              tempUnit === "C"
                ? data?.data?.forecast?.forecastday[0]?.day?.maxtemp_c
                : data?.data?.forecast?.forecastday[0]?.day?.maxtemp_f
            }
            unit={tempUnit === "C" ? "°C" : "°F"}
          />
          <Divider sx={{ margin: "10px 0px" }} />
          <WeatherCard
            title="Min Temperature"
            icon={icons.mintemp}
            value={
              tempUnit === "C"
                ? data?.data?.forecast?.forecastday[0]?.day?.mintemp_c
                : data?.data?.forecast?.forecastday[0]?.day?.mintemp_f
            }
            unit={tempUnit === "C" ? "°C" : "°F"}
          />
          <Divider sx={{ margin: "10px 0px" }} />
          <WeatherCard
            title="Feels Like"
            icon={icons.feelslike}
            value={
              tempUnit === "C"
                ? `${data?.data?.current?.feelslike_c}`
                : `${data?.data?.current?.feelslike_f}`
            }
            unit={tempUnit === "C" ? "°C" : "°F"}
          />
        </Card>

        <Card sx={{ width: "100%", padding: "20px" }}>
          <WeatherCard
            title="Humidity"
            icon={icons.humidity}
            value={data?.data?.forecast?.forecastday[0]?.day?.avghumidity}
            unit={"%"}
          />
          <Divider sx={{ margin: "10px 0px" }} />
          <WeatherCard
            title="Pressure"
            icon={icons.pressure}
            value={data?.data?.current?.pressure_mb}
            unit={"mb"}
          />
          <Divider sx={{ margin: "10px 0px" }} />
          <WeatherCard
            title="Visibility"
            icon={icons.visibility}
            value={data?.data?.current?.vis_km}
            unit={"Km"}
          />
        </Card>

        <Card sx={{ width: "100%", padding: "20px" }}>
          <WeatherCard
            title="Wind"
            icon={icons.windPower}
            value={data?.data?.current?.wind_kph}
            unit={"Kph"}
          />
          <Divider sx={{ margin: "10px 0px" }} />
          <WeatherCard
            title="Wind Direction"
            icon={icons.windDirection}
            value={data?.data?.current?.wind_dir}
            unit={""}
          />
          <Divider sx={{ margin: "10px 0px" }} />
          <WeatherCard
            title="UV"
            icon={icons.uv}
            value={data?.data?.current?.uv}
            unit={"mW/m2"}
          />
        </Card>
      </Grid>
    </Box>
  );
}

export default MainCard;
