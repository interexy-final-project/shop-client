import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./assets/styles.css";
import "./i18n";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(<App />);
