import React from "react";

function Legenda(props) {
  return (
    <div className="row">
      <div className="col-md-6">
        <h2 className="text-secondary text-right">Legenda:</h2>
      </div>
      <div className="col-md-3 mb-2">
        <ul className="list-group text-secondary">
          <li className="list-group-item ">
            <span className="fas fa-image" />
            <span className="ml-2">Imagem</span>
          </li>
          <li className="bg-light list-group-item ">
            <span className="fas fa-comment-alt" />
            <span className="ml-2">Caption</span>
          </li>
          <li className="list-group-item">
            <span className="fas fa-video" />{" "}
            <span className="ml-1">Vídeo</span>
          </li>
          <li className="bg-light list-group-item">
            <span className="fas fa-volume-up" />
            <span className="ml-2">Áudio</span>
          </li>
        </ul>
      </div>
      <div className="col-md-3 mb-2">
        <ul className="list-group text-secondary">
          <li className="list-group-item">
            <span className="fas fa-chart-bar" />{" "}
            <span className="ml-2">Infográfico</span>
          </li>
          <li className="bg-light list-group-item">
            <span className="fas fa-chart-area" />
            <span className="ml-2">Infomatéria</span>
          </li>
          <li className="list-group-item">
            <span className="fas fa-book" />{" "}
            <span className="ml-2">E-cidadania</span>
          </li>
          <li className="bg-light list-group-item">
            <span className="fas fa-home" />{" "}
            <span className="ml-2">Na Home</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Legenda;
