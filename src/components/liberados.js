import React from "react";

function ListaLiberados(props) {
  const reviewList = props.materias.filter(materias => materias.revisado);
  const renderList = reviewList.map(materia => (
    <li className="list-group-item list-group-item-action" key={materia.id}>{`${
      materia.chamada
    } -- escrita por: ${materia.autor}`}</li>
  ));

  return (
    <div className="pt-3 mb-2 border border-secondary border-white border-bottom-0">
      <h1 className="text-center">Liberados</h1>
      <ul className="list-group mb-5">{renderList}</ul>
    </div>
  );
}

export default ListaLiberados;
