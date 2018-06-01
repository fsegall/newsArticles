import React, { Component } from "react";

function ListaMateria(props) {
  const renderList = props.materias.map(materia => (
    <li key={materia.id}>{`${materia.chamada} -- escrita por: ${
      materia.autor
    }`}</li>
  ));

  return <ul>{renderList}</ul>;
}

export default ListaMateria;
