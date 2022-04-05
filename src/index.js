import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/index.scss";
import "./Styles/font.scss";
import "./Styles/root.scss";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
