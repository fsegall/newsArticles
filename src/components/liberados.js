import React from "react";
import ItemMateria from "./itemMateria";
import ContainerLista from "./containerLista";
import { renderList } from "./renderLista";

// Render list Components
function ListaLiberados(props) {
  const status = props.status[2];
  const reviewedList = props.materias.filter(materias => materias.revisado);
  return renderList(status, reviewedList);
}

export default ListaLiberados;
