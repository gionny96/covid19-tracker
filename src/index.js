import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import "@forevolve/bootstrap-dark/dist/css/bootstrap-dark.min.css";
import "font-awesome/css/font-awesome.min.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { mockCovidApi } from "./data/mock/ApiMock";

// enable mock if we are in dev mode
if (process.env.NODE_ENV && process.env.NODE_ENV === "development") {
  mockCovidApi();
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
