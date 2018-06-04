import React, { Component } from "react";

function ListaMateria(props) {
  const renderList = props.materias.map(materia => (
    <li className="list-group-item list-group-item-action" key={materia.id}>{`${
      materia.chamada
    } -- escrita por: ${materia.autor}`}</li>
  ));

  return <ul className="list-group mb-5">{renderList}</ul>;
}

export default ListaMateria;
