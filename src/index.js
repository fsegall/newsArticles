import React from "react";
import ReactDOM from "react-dom";

// Bootstrap
import "jquery";
import "popper.js";

import "./styles/scss/custom.scss";
import "bootstrap";

//Components

import Panel from "./components/panel";

import Lists from './components/lists';

// Test Data
const articles = [
  {
    id: 0,
    author: "João Silva",
    senadoAgora: true,
    headline:
      "Pedro I criou Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus faucibus nec neque vitae fermentum. Nunc dignissim orci magna, in efficitur eros volutpat et.",
    publishDate: "01/03/2018 - 13h43",
    private: true,
    reviewed: true
  },
  {
    id: 1,
    author: "Joana Silva",
    senadoAgora: false,
    headline:
      "CDR aprova Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus faucibus nec neque vitae fermentum. Nunc dignissim orci magna, in efficitur eros volutpat et.",
    publishDate: null,
    private: false,
    reviewed: true
  },
  {
    id: 2,
    author: "José Silva",
    senadoAgora: false,
    headline:
      "Senado aprova Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus faucibus nec neque vitae fermentum. Nunc dignissim orci magna, in efficitur eros volutpat et.",
    publishDate: null,
    private: true,
    reviewed: false
  }
];

const articleStatus = [
  "Private",
  "Not Reviewed",
  "Reviewed",
  "Published"
];

//App

ReactDOM.render(
  <Panel>
    <div className="ItIsaFont">
    <i class="fab fa-earlybirds"></i>
    </div>
    <Lists articles={articles} status={articleStatus} />
  </Panel>,
  document.getElementById("app")
);