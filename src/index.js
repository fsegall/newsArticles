import React from "react";
import ReactDOM from "react-dom";

// Bootstrap
import "jquery";
import "popper.js";

import "./styles/scss/custom.scss";
import "bootstrap";

// Main CSS file

import styles from "./styles/css/main.css";

//Componentes

import Painel from "./components/painel";

import ListaMateria from "./containers/listaMaterias";

import ListaPrivados from "./components/privados";

import ListaPublicados from "./components/publicados";

import ListaRevisar from "./components/revisaoPendente";

import ListaLiberados from "./components/liberados";
import ContainerLista from "./components/containerLista";

// Dados de teste
const materias = [
  {
    id: 0,
    autor: "João Silva",
    senadoAgora: true,
    chamada:
      "Pedro I criou Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus faucibus nec neque vitae fermentum. Nunc dignissim orci magna, in efficitur eros volutpat et.",
    dataPublicacao: "01/03/2018 - 13h43",
    privado: true,
    revisado: true
  },
  {
    id: 1,
    autor: "Joana Silva",
    senadoAgora: false,
    chamada:
      "CDR aprova Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus faucibus nec neque vitae fermentum. Nunc dignissim orci magna, in efficitur eros volutpat et.",
    dataPublicacao: null,
    privado: true,
    revisado: true
  },
  {
    id: 2,
    autor: "José Silva",
    senadoAgora: false,
    chamada:
      "Senado aprova Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus faucibus nec neque vitae fermentum. Nunc dignissim orci magna, in efficitur eros volutpat et.",
    dataPublicacao: null,
    privado: true,
    revisado: false
  }
];

const statusMateria = [
  "Privados",
  "Revisão Pendente",
  "Liberados",
  "Publicados"
];

//App

ReactDOM.render(
  <Painel>
    <ListaPrivados materias={materias} status={statusMateria} />
    <ListaRevisar materias={materias} status={statusMateria} />
    <ListaLiberados materias={materias} status={statusMateria} />
    <ListaPublicados materias={materias} status={statusMateria} />
  </Painel>,
  document.getElementById("app")
);
