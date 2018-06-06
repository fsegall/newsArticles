import React from "react";
import ItemMateria from "./itemMateria";
import ContainerLista from "./containerLista";
import { renderList } from "./renderLista";

// Render list Components
function ListaPublicados(props) {
  const status = props.status[3];
  const publishList = props.materias.filter(
    materias => materias.dataPublicacao
  );
  return renderList(status, publishList);
}

export default ListaPublicados;
