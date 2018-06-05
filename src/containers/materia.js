import React, { Component } from "react";

class Materia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentType: {
        senadoAgora: false,
        text: true,
        photo: true,
        video: false,
        audio: false,
        home: false
      },
      contentStatus: {
        dataPublicacao: null,
        privado: true,
        inReview: false,
        revisado: false
      }
    };
  }

  handleContentTypeChange(configMateria) {
    this.setState({
      contentType: configMateria
    });
  }

  handleContentStatusChange(configStatus) {
    this.setState({
      contentStatus: configStatus
    });
  }

  render() {
    return;
  }
}

export default Materia;
