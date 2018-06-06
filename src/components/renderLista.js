import React from "react";
import ItemMateria from "./itemMateria";
import ContainerLista from "./containerLista";

// Helper function to render a list
export const renderList = function(status, filterList) {
  const renderList = filterList.map(materia => (
    <ItemMateria key={materia.id} materia={materia} />
  ));

  return <ContainerLista status={status} renderList={renderList} />;
};
