import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./regulondbGlobalStyle.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
