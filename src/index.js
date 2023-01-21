import { createRoot } from "react-dom/client";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./app/App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Router>
    {/* <Provider> */}
    <p>howdy</p>
    <App />
    {/* </Provider> */}
  </Router>
);
