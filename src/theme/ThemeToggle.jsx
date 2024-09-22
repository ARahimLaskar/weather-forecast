import React, { useMemo } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { createTheme, styled } from "@mui/material/styles";
import { getDesignTokens } from ".";
import { useSelector } from "react-redux";

const ThemeToggle = ({ children }) => {
  const themeMode = useSelector((state) => state.settings.themeMode);
  const theme = useMemo(
    () => createTheme(getDesignTokens(themeMode)),
    [themeMode]
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeToggle;
