import {
  Box,
  Card,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  IconTemperaturePlus,
  IconTemperatureMinus,
  IconTemperature,
  IconSunWind,
  IconCalendar,
} from "@tabler/icons-react";

import React from "react";
import { useSelector } from "react-redux";

function FiveDayForcast({ data }) {
  const tempUnit = useSelector((state) => state.settings.tempUnit);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ marginTop: isSmallScreen && "10px" }}>
      <Card sx={{ padding: "20px" }}>
        <Typography sx={{ fontSize: theme.typography.primaryFontSize }}>
          5 days forecast
        </Typography>

        {data?.data?.forecast?.forecastday?.slice(1)?.map((value, index) => (
          <Grid key={index}>
            <Divider sx={{ margin: "10px 0px" }} />
            <Grid>
              <Grid sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <IconCalendar size={"1.2rem"} />
                <Typography
                  sx={{
                    fontSize: theme.typography.tertiaryFontSize,
                  }}
                >
                  {value?.date}
                </Typography>
              </Grid>
              {isMediumScreen && (
                <Grid
                  item
                  // xs={5}
                  sx={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <img
                    style={{ width: "35px" }}
                    src={value?.day?.condition?.icon}
                  />
                  <Typography
                    sx={{
                      fontSize: theme.typography.tertiaryFontSize,
                      wordWrap: "break-word",
                      overflowWrap: "break-word",
                      whiteSpace: "normal",
                    }}
                  >
                    {value?.day?.condition?.text}
                  </Typography>
                </Grid>
              )}

              <Grid
                sx={{
                  display: "flex",
                }}
              >
                <Grid item xs={isMediumScreen ? 12 : 7} sx={{ width: "100%" }}>
                  <Grid
                    sx={{
                      paddingTop: "6px",
                      display: "flex",
                      justifyContent: "flex-start",
                    }}
                  >
                    {tempUnit === "C" ? (
                      <Grid
                        sx={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <IconTemperature size={"1.2rem"} />
                        <Typography
                          sx={{ fontSize: theme.typography.tertiaryFontSize }}
                        >{`${value?.day?.avgtemp_c}°C`}</Typography>
                      </Grid>
                    ) : (
                      <Grid
                        sx={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <IconTemperature size={"1.2rem"} />
                        <Typography
                          sx={{ fontSize: theme.typography.tertiaryFontSize }}
                        >{`${value?.day?.avgtemp_f}°F`}</Typography>
                      </Grid>
                    )}

                    <Grid
                      sx={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <IconSunWind size={"1.2rem"} />
                      <Typography
                        sx={{ fontSize: theme.typography.tertiaryFontSize }}
                      >{`${value?.day?.avghumidity}%`}</Typography>
                    </Grid>
                  </Grid>
                  {tempUnit === "C" ? (
                    <Grid
                      sx={{
                        paddingTop: "6px",
                        display: "flex",
                        justifyContent: "flex-start",
                      }}
                    >
                      <Grid
                        sx={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <IconTemperaturePlus size={"1.2rem"} />
                        <Typography
                          sx={{ fontSize: theme.typography.tertiaryFontSize }}
                        >{`${value?.day?.maxtemp_c}°C`}</Typography>
                      </Grid>
                      <Grid
                        sx={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <IconTemperatureMinus size={"1.2rem"} />
                        <Typography
                          sx={{ fontSize: theme.typography.tertiaryFontSize }}
                        >{`${value?.day?.mintemp_c}°C`}</Typography>
                      </Grid>
                    </Grid>
                  ) : (
                    <Grid
                      sx={{
                        paddingTop: "6px",
                        display: "flex",
                        justifyContent: "flex-start",
                      }}
                    >
                      <Grid
                        sx={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <IconTemperaturePlus size={"1.2rem"} />
                        <Typography
                          sx={{ fontSize: theme.typography.tertiaryFontSize }}
                        >{`${value?.day?.maxtemp_f}°F`}</Typography>
                      </Grid>
                      <Grid
                        sx={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <IconTemperatureMinus size={"1.2rem"} />
                        <Typography
                          sx={{
                            padding: "0px",
                            fontSize: theme.typography.tertiaryFontSize,
                          }}
                        >{`${value?.day?.mintemp_f}°F`}</Typography>
                      </Grid>
                    </Grid>
                  )}
                </Grid>

                {isMediumScreen ? null : (
                  <Grid
                    item
                    xs={5}
                    sx={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <img
                      style={{ width: "35px" }}
                      src={value?.day?.condition?.icon}
                    />
                    <Typography
                      sx={{
                        fontSize: theme.typography.tertiaryFontSize,
                        wordWrap: "break-word",
                        overflowWrap: "break-word",
                        whiteSpace: "normal",
                      }}
                    >
                      {value?.day?.condition?.text}
                    </Typography>
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Card>
    </Box>
  );
}

export default FiveDayForcast;
