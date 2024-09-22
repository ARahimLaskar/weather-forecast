import React from "react";
import { Grid, Typography, useTheme } from "@mui/material";

function WeatherCard({ title, icon, value, unit }) {
  const theme = useTheme();
  return (
    <Grid>
      <Typography sx={{paddingBottom:"10px", fontSize: theme.typography.tertiaryFontSize }}>
        {title}
      </Typography>
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img style={{ width: "40px" }} src={icon} alt={`${title} icon`} />
        <Typography
          sx={{paddingLeft:'10px', fontSize: theme.typography.tertiaryFontSize }}
        >{`${value} ${unit}`}</Typography>
      </Grid>
    </Grid>
  );
}

export default WeatherCard;
