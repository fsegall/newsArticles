import React from "react";
import ItemMateria from "./itemMateria";
import ContainerLista from "./containerLista";

function ListaRevisar(props) {
  const status = props.status[1];
  const reviewList = props.materias.filter(materias => !materias.revisado);
  const renderList = reviewList.map(materia => (
    <ItemMateria key={materia.id} materia={materia} />
  ));

  return <ContainerLista status={status} renderList={renderList} />;
}

export default ListaRevisar;
