import React from "react";
import ItemMateria from "./itemMateria";
import ContainerLista from "./containerLista";
import { renderList } from "./renderLista";

// Render list Components
function ListaPrivados(props) {
  const status = props.status[0];
  const privateList = props.materias.filter(materias => materias.privado);
  return renderList(status, privateList);
}

export default ListaPrivados;
