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
    chamada: "Pedro I criou Supremo com poderes esvaziados",
    dataPublicacao: "01/03/2018 - 13h43",
    privado: true,
    revisado: true
  },
  {
    id: 1,
    autor: "Joana Silva",
    senadoAgora: false,
    chamada:
      "CDR aprova desconto de energia elétrica para sistemas de consumo de água do rio São Francisco",
    dataPublicacao: null,
    privado: true,
    revisado: true
  },
  {
    id: 2,
    autor: "José Silva",
    senadoAgora: false,
    chamada:
      "Senado aprova ampliação de prazo para elaboração de Plano de Mobilidade Urbana",
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
