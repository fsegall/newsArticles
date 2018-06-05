import React from "react";

function ItemMateria(props) {
  const materia = props.materia;
  return (
    <li className="list-group-item list-group-item-action">
      <span className="badge badge-primary w-100">
        {materia.dataPublicacao}
      </span>
      <div>{materia.chamada}</div>
      <div>{`Escrita por: ${materia.autor}`}</div>
    </li>
  );
}

export default ItemMateria;
