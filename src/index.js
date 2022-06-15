import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";

import Routes from "./routes";

import Navbar from "./components/Navbar";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />

      <Navbar />

      <Routes />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
