import React from "react";

function ListaPrivados(props) {
  const privateList = props.materias.filter(materias => materias.privado);
  const renderList = privateList.map(materia => (
    <li className="list-group-item list-group-item-action" key={materia.id}>
      <span className="badge badge-primary w-100">
        {materia.dataPublicacao}
      </span>
      <div>{materia.chamada}</div>
      <div>{`Escrita por: ${materia.autor}`}</div>
    </li>
  ));

  return (
    <div className="pt-3 mb-2 border border-secondary border-white border-bottom-0">
      <h1 className="text-center">Privados</h1>
      <button
        className="btn btn-primary"
        data-toggle="tooltip"
        data-placement="top"
        title="Tooltip on top"
      >
        Tooltip On Top
      </button>
      <ul className="list-group mb-5">{renderList}</ul>
    </div>
  );
}

export default ListaPrivados;
