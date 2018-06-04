import React, { Component } from "react";

const renderList = materias => {
  materias.map(materia => (
    <li key={materia.id}>{`${materia.chamada} escrita por: ${
      materia.autor
    }`}</li>
  ));
};

class Materia extends Component {
  render() {
    return (
      <div className="pt-3 mb-2 border border-secondary border-white border-bottom-0">
        <ul>{renderList}</ul>
      </div>
    );
  }
}

export default Materia;
