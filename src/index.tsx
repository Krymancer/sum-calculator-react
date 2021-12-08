import React from "react";
import ReactDOM from "react-dom";

import "./theme/global.scss";

import Main from "./pages/Main";

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById("root")
);
