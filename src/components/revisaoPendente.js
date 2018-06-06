import React from "react";
import ItemMateria from "./itemMateria";
import ContainerLista from "./containerLista";
import { renderList } from "./renderLista";

// Render list Components
function ListaRevisar(props) {
  const status = props.status[1];
  const reviewList = props.materias.filter(materias => !materias.revisado);
  return renderList(status, reviewList);
}

export default ListaRevisar;
