import React, { Component } from "react";

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
        {/*         <div className="text-right">
          <button className="btn btn-default m-1">My Articles</button>
          <button className="btn btn-default m-1">Authors</button>
          <button className="btn btn-warning m-1">Locked</button>
        </div> */}

        <div className="row">
          <div className="d-flex flex-wrap text-white font-bold text-center col-md-6">
            <div className="bg-secondary box p-2">
              <div className={!hidden ? "" : "d-none"}>
                <p className="">Total</p>
                <div className="">{articlesTotal}</div>
              </div>
            </div>

            <div className="bg-danger box p-2">
              <div className={!hidden ? "" : "d-none"}>
                <p className="">Private</p>
                <div>{this.props.articlesPrivate}</div>
              </div>
            </div>

            <div className="bg-warning box p-2">
              <div className={!hidden ? "" : "d-none"}>
                <p className="">Edit</p>
                <div className="">{this.props.articlesNotReviewed}</div>
              </div>
            </div>

            <div className="bg-success box p-2">
              <div className={!hidden ? "" : "d-none"}>
                <p className="">Reviewed</p>
                <div className="">{this.props.articlesReviewed}</div>
              </div>
            </div>

            <div className="bg-primary box p-2">
              <div className={!hidden ? "" : "d-none"}>
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
