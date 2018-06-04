import React from "react";
import ReactDOM from "react-dom";
import "jquery";
import "popper.js";
import "bootstrap";

import styles from "./styles/main.css";

import Painel from "./components/painel";

import ListaMateria from "./containers/listaMaterias";

import ListaPrivados from "./components/privados";

import ListaPublicados from "./components/publicados";

import ListaRevisar from "./components/revisaoPendente";

import ListaLiberados from "./components/liberados";

const materias = [
  {
    id: 0,
    autor: "João Silva",
    senadoAgora: true,
    chamada: "Pedro I criou Supremo com poderes esvaziados",
    dataPublicacao: "01/03/2018 - 13h43",
    privado: false,
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
    revisado: false
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

ReactDOM.render(
  <Painel>
    <ListaMateria materias={materias} />

    <ListaPrivados materias={materias} />

    <ListaRevisar materias={materias} />

    <ListaLiberados materias={materias} />

    <ListaPublicados materias={materias} />
  </Painel>,
  document.getElementById("app")
);
