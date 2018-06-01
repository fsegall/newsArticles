import React from "react";
import ReactDOM from "react-dom";

import styles from "./styles/main.css";

import Painel from "./components/painel";

import ListaMateria from "./containers/listaMaterias";

const materias = [
  {
    id: 0,
    autor: "João Silva",
    senadoAgora: true,
    chamada: "Pedro I criou Supremo com poderes esvaziados",
    dataPublicação: "01/03/2018 - 13h43",
    privado: false,
    revisado: true
  },
  {
    id: 1,
    autor: "Joana Silva",
    senadoAgora: false,
    chamada:
      "CDR aprova desconto de energia elétrica para sistemas de consumo de água do rio São Francisco",
    dataPublicação: null,
    privado: true,
    revisado: false
  },
  {
    id: 2,
    autor: "José Silva",
    senadoAgora: false,
    chamada:
      "Senado aprova ampliação de prazo para elaboração de Plano de Mobilidade Urbana",
    dataPublicação: null,
    privado: true,
    revisado: false
  }
];

ReactDOM.render(
  <Painel>
    <ListaMateria materias={materias} />
  </Painel>,
  document.getElementById("app")
);
