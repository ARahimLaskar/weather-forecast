import {
  Box,
  Card,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import React from "react";
import { useSelector } from "react-redux";

function PresentCard({ data }) {
  const theme = useTheme();
  const tempUnit = useSelector((state) => state.settings.tempUnit);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ marginBottom: isSmallScreen && "10px" }}>
      <Card sx={{ padding: "20px" }}>
        <Typography sx={{ fontSize: theme.typography.primaryFontSize }}>
          Now
        </Typography>
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {tempUnit === "C" ? (
            <Typography
              variant="h1"
              sx={{ fontWeight: "600" }}
            >{`${data?.data?.current.temp_c}°C`}</Typography>
          ) : (
            <Typography
              variant="h1"
              sx={{ fontWeight: "600" }}
            >{`${data?.data?.current.temp_f}°F`}</Typography>
          )}

          <img src={data?.data?.current?.condition?.icon} />
        </Grid>
        <Typography
          sx={{
            fontSize: theme.typography.tertiaryFontSize,
            fontStyle: "italic",
          }}
        >{`${data?.data?.current?.condition?.text}`}</Typography>
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "10px 0px",
          }}
        >
          <PlaceOutlinedIcon />
          <Typography
            variant="body1"
            sx={{
              fontSize: theme.typography.secondaryFontSize,
              wordWrap: "break-word",
              overflowWrap: "break-word",
              whiteSpace: "normal",
            }}
          >
            {`${data?.data?.location?.name}, ${data?.data?.location?.region}, ${data?.data?.location?.country}`}
          </Typography>
        </Grid>
      </Card>
    </Box>
  );
}

export default PresentCard;
