import React, { Component } from "react";

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
          <div className="d-flex text-white font-bold text-center col-md-6">
            <div
              className={
                !hidden
                  ? "bg-secondary box-animation p-2"
                  : "bg-secondary box px-5"
              }
            >
              <div className={!hidden ? "fade" : "d-none"}>
                <p className="">Total</p>
                <div className="">{articlesTotal}</div>
              </div>
            </div>

            <div
              className={
                !hidden ? "bg-danger box-animation p-2" : "bg-danger box px-5"
              }
            >
              <div className={!hidden ? "fade" : "d-none"}>
                <p className="">Private</p>
                <div>{this.props.articlesPrivate}</div>
              </div>
            </div>

            <div
              className={
                !hidden ? "bg-warning box-animation p-2" : "bg-warning box px-5"
              }
            >
              <div className={!hidden ? "fade" : "d-none"}>
                <p className="">Edit</p>
                <div className="">{this.props.articlesNotReviewed}</div>
              </div>
            </div>

            <div
              className={
                !hidden ? "bg-success box-animation p-2" : "bg-success box px-5"
              }
            >
              <div className={!hidden ? "fade" : "d-none"}>
                <p className="">Reviewed</p>
                <div className="">{this.props.articlesReviewed}</div>
              </div>
            </div>

            <div
              className={
                !hidden ? "bg-primary box-animation p-2" : "bg-primary box px-5"
              }
            >
              <div className={!hidden ? "fade" : "d-none"}>
                <p className="">Published</p>
                <div className="">{this.props.articlesPublished}</div>
              </div>
            </div>

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
