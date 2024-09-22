import {
  Card,
  FormControlLabel,
  Grid,
  styled,
  Switch,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { IconCalendar } from "@tabler/icons-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTempUnit } from "../store/reduxSlice";
const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%20fill=%22none%22%20stroke=%22white%22%20stroke-width=%222%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%20class=%22icon%20icon-tabler%20icon-tabler-temperature-fahrenheit%22%3E%3Cpath%20stroke=%22none%22%20d=%22M0%200h24v24H0z%22%20fill=%22none%22/%3E%3Cpath%20d=%22M6%208m-2%200a2%202%200%201%200%204%200a2%202%200%201%200-4%200%22/%3E%3Cpath%20d=%22M13%2012l5%200%22/%3E%3Cpath%20d=%22M20%206h-6a1%201%200%200%200-1%201v11%22/%3E%3C/svg%3E')`,
      },
      "& .MuiSwitch-thumb": {
        backgroundColor: "#003892", // Light blue for Fahrenheit
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "#aab4be",
        ...theme.applyStyles("dark", {
          backgroundColor: "#8796A5",
        }),
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: "#fa7f34", // Light red for Celsius
    width: 32,
    height: 32,
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "16px", // Adjusted the size of the icon
      backgroundImage: `url('data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%20fill=%22none%22%20stroke=%22white%22%20stroke-width=%222%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%20class=%22icon%20icon-tabler%20icon-tabler-temperature-celsius%22%3E%3Cpath%20stroke=%22none%22%20d=%22M0%200h24v24H0z%22%20fill=%22none%22/%3E%3Cpath%20d=%22M6%208m-2%200a2%202%200%201%200%204%200a2%202%200%201%200-4%200%22/%3E%3Cpath%20d=%22M20%209a3%203%200%200%200-3-3h-1a3%203%200%200%200-3%203v6a3%203%200%200%200%203%203h1a3%203%200%200%200%203-3%22/%3E%3C/svg%3E')`,
    },
    ...theme.applyStyles("dark", {
      backgroundColor: "#fa7f34",
    }),
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: "#aab4be",
    borderRadius: 20 / 2,
    ...theme.applyStyles("dark", {
      backgroundColor: "#8796A5",
    }),
  },
}));
function ToggleUnitCard({ data }) {
  const dispatch = useDispatch();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const tempUnit = useSelector((state) => state.settings.tempUnit);
  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        marginBottom: isSmallScreen ? "0px" : "10px",
      }}
    >
      <Typography sx={{ fontSize: theme.typography.primaryFontSize }}>
        Todays Highlight
      </Typography>
      <Grid sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Grid sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <IconCalendar size={"1.6rem"} />
          <Typography sx={{ fontSize: theme.typography.secondaryFontSize }}>{`Date ${data?.data?.forecast?.forecastday[0]?.date}`}</Typography>
        </Grid>
        <FormControlLabel
          sx={{
            margin: 0,
          }}
          control={
            <MaterialUISwitch
              checked={tempUnit === "F"}
              onChange={() => dispatch(toggleTempUnit())}
            />
          }
        />
      </Grid>
    </Card>
  );
}

export default ToggleUnitCard;
