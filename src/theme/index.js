export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: "#1976d2", // Light mode primary color
          },
          secondary: {
            main: "#dc004e",
          },
          background: {
            default: "#f5f5f5", // Light mode background color
            paper: "#ffffff",
          },
          text: {
            primary: "#000000", // Light mode text color
          },
        }
      : {
          primary: {
            main: "#90caf9", // Dark mode primary color
          },
          secondary: {
            main: "#f48fb1",
          },
          background: {
            default: "#121212", // Dark mode background color
            paper: "#1c1c1c",
          },
          text: {
            primary: "#ffffff", // Dark mode text color
          },
        }),
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    primaryFontSize: "1.5rem",
    secondaryFontSize: "1.25rem",
    tertiaryFontSize: "1rem",

    h1: {
      fontSize: "2.5rem",
    },
    h2: {
      fontSize: "2rem",
    },
    body1: {
      fontSize: "1.25rem",
    },
  },
});
