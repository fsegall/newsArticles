import React from "react";
import ItemMateria from "./itemMateria";
import ContainerLista from "./containerLista";

function ListaPublicados(props) {
  const status = props.status[3];
  const publishList = props.materias.filter(
    materias => materias.dataPublicacao
  );
  const renderList = publishList.map(materia => (
    <ItemMateria key={materia.id} materia={materia} />
  ));

  return <ContainerLista status={status} renderList={renderList} />;
}

export default ListaPublicados;
