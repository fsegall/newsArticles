import React from "react";

function ListaPrivados(props) {
  const privateList = props.materias.filter(materias => materias.privado);
  const renderList = privateList.map(materia => (
    <li key={materia.id}>{`${materia.chamada} -- escrita por: ${
      materia.autor
    }`}</li>
  ));

  return (
    <div className="container-fluid">
      <h1>Privados</h1>
      <ul>{renderList}</ul>
    </div>
  );
}

export default ListaPrivados;
