import React from "react";

function ListaLiberados(props) {
  const reviewList = props.materias.filter(materias => materias.revisado);
  const renderList = reviewList.map(materia => (
    <li key={materia.id}>{`${materia.chamada} -- escrita por: ${
      materia.autor
    }`}</li>
  ));

  return (
    <div>
      <h1>Liberados</h1>
      <ul>{renderList}</ul>
    </div>
  );
}

export default ListaLiberados;
