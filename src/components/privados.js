import React from "react";
import ItemMateria from "./itemMateria";
import ContainerLista from "./containerLista";

function ListaPrivados(props) {
  const status = props.status[0];
  const privateList = props.materias.filter(materias => materias.privado);
  const renderList = privateList.map(materia => (
    <ItemMateria key={materia.id} materia={materia} />
  ));

  return <ContainerLista status={status} renderList={renderList} />;
}

export default ListaPrivados;
