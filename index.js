import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(
  <Provider store={store}>
    <h1>Howdy!</h1>
  </Provider>
);
