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
      <div>
        <div className="row">
          <div className="d-flex text-white text-center col-md-6">
            <div
              className={
                !hidden
                  ? "bg-secondary box-animation p-2"
                  : "bg-secondary box px-5"
              }
            >
              <div className={!hidden ? "fade" : "d-none"}>
                <p className="bg-dark rounded">Total</p>
                <div className="bg-dark rounded-circle p-1 rad m-auto">
                  {articlesTotal}
                </div>
              </div>
            </div>

            <StatusBox
              statusStage="Private"
              statusClass="bg-danger"
              hidden={this.state.hidden}
              count={this.props.articlesPrivate}
            />

            <StatusBox
              statusStage="Edit"
              statusClass="bg-warning"
              hidden={this.state.hidden}
              count={this.props.articlesNotReviewed}
            />

            <StatusBox
              statusStage="Reviewed"
              statusClass="bg-success"
              hidden={this.state.hidden}
              count={this.props.articlesReviewed}
            />

            <StatusBox
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
      </div>
    );
  }
}

export default StatusBar;
