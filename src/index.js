import React from "react";

import ReactDOM from "react-dom";


// Bootstrap
import "jquery";
import "popper.js";

import "./styles/scss/custom.scss";

import "bootstrap";

//Components

import App from "./containers/App";

//App

/* axios
  .get("http://localhost:8080/dados")
  .then(res => {
    console.log(res);
  })
  .catch(err => console.log(err)); */

ReactDOM.render(<App />, document.getElementById("app"));
