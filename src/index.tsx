import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./assets/themes";
import "../src/assets/style.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
