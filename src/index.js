import React from "react";
import ReactDOM from "react-dom";

// Bootstrap
import "jquery";
import "popper.js";

import "./styles/scss/custom.scss";

import "bootstrap";

//Components

import Panel from "./containers/panel";

//App

ReactDOM.render(<Panel />, document.getElementById("app"));
