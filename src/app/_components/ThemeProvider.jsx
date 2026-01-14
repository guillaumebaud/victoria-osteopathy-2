"use client";
import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Victoria Osteopathy brand colors
const theme = createTheme({
  palette: {
    primary: {
      main: "#2E5EAA",
      dark: "#1e4080",
      light: "#4a7bc4",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#4A90BE",
      dark: "#3a7299",
      light: "#6ba8d0",
      contrastText: "#ffffff",
    },
  },
  typography: {
    fontFamily: '"Titillium Web", "Roboto", "Helvetica", "Arial", sans-serif',
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "4px",
        },
        contained: {
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#1e4080",
            color: "#ffffff",
          },
        },
        outlined: {
          borderColor: "#2E5EAA",
          "&:hover": {
            borderColor: "#1e4080",
            backgroundColor: "rgba(46, 94, 170, 0.04)",
          },
        },
        text: {
          "&:hover": {
            backgroundColor: "transparent",
            textDecoration: "underline",
          },
        },
        // Size variants
        sizeSmall: {
          padding: "6px 16px",
          fontSize: "14px",
        },
        sizeMedium: {
          padding: "10px 24px",
          fontSize: "15px",
        },
        sizeLarge: {
          padding: "12px 32px",
          fontSize: "16px",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "#2E5EAA",
        },
      },
    },
  },
});

export default function ThemeProvider({ children }) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
