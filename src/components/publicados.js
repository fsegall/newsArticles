import React from "react";

function ListaPublicados(props) {
  const publishList = props.materias.filter(
    materias => materias.dataPublicacao
  );
  const renderList = publishList.map(materia => (
    <li key={materia.id}>{`${materia.chamada} -- escrita por: ${
      materia.autor
    }`}</li>
  ));

  return (
    <div>
      <h1>Publicados</h1>
      <ul>{renderList}</ul>
    </div>
  );
}

export default ListaPublicados;
