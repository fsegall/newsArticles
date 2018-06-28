import React, { Component } from "react";
import StatusBox from "./statusBox";

//Renders a colored status bar for news articles with list item counters

class StatusBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      extended: true,
      hidden: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    console.log(e.target);
    this.setState({
      extended: !this.state.extended,
      hidden: !this.state.hidden
    });

    console.log(this.state);
  }

  render() {
    const articlesTotal =
      this.props.articlesPrivate +
      this.props.articlesNotReviewed +
      this.props.articlesReviewed +
      this.props.articlesPublished;

    const extended = this.state.extended;
    const hidden = this.state.hidden;

    return (
      <div className="ml-4">
        <div className="d-flex text-white text-center">
          <StatusBox
            bgClass="bg-light"
            statusStage="Total"
            statusClass="bg-secondary"
            hidden={this.state.hidden}
            count={articlesTotal}
          />

          <StatusBox
            bgClass="bg-light"
            statusStage="Private"
            statusClass="bg-danger"
            hidden={this.state.hidden}
            count={this.props.articlesPrivate}
          />

          <StatusBox
            bgClass="bg-light"
            statusStage="Edit"
            statusClass="bg-warning"
            hidden={this.state.hidden}
            count={this.props.articlesNotReviewed}
          />

          <StatusBox
            bgClass="bg-light"
            statusStage="Reviewed"
            statusClass="bg-success"
            hidden={this.state.hidden}
            count={this.props.articlesReviewed}
          />

          <StatusBox
            bgClass="bg-light"
            statusStage="Published"
            statusClass="bg-primary"
            hidden={this.state.hidden}
            count={this.props.articlesPublished}
          />

          <span
            onClick={e => this.onClick(e)}
            className={
              this.state.extended
                ? "fas fa-minus-circle text-secondary ml-2"
                : "fas fa-plus-circle text-secondary ml-2"
            }
          />
        </div>
      </div>
    );
  }
}

export default StatusBar;
