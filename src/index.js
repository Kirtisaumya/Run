import React from "react";
import { createRoot } from "react-dom";
import App from "./App"; // Assuming App.js is the root component

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
