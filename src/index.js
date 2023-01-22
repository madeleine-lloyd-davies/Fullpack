import { createRoot } from "react-dom/client";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./app/App";
import store from "./store";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Router>
    <Provider store={store}>
      <p>howdy from src/index.js</p>
      <App />
    </Provider>
  </Router>
);
