import React, { Component } from "react";

class LockedIcon extends Component {
  constructor(props) {
    super(props);
    this.state = { tipVisible: false };
    this.showTip = this.showTip.bind(this);
    this.hideTip = this.hideTip.bind(this);
  }

  showTip() {
    this.setState({ tipVisible: true });
  }

  hideTip() {
    this.setState({ tipVisible: false });
  }

  render() {
    if (this.props.locked) {
      return (
        <div className="text-right">
          <span
            id="editing"
            className={`mr-2 text-warning ${
              this.state.tipVisible ? "" : "invisible"
            }`}
          >
            John Silva is editing this content.
          </span>
          <button
            className="unbutton"
            onMouseOver={this.showTip}
            onMouseOut={this.hideTip}
          >
            <span id="locked" className="text-secondary fas fa-lock" />
          </button>
        </div>
      );
    } else {
      return (
        <div className="text-right">
          <span
            id="free"
            className={`mr-2 text-success ${
              this.state.tipVisible ? "" : "invisible"
            }`}
          >
            Free to edit
          </span>
          <button
            className="unbutton"
            onMouseOver={this.showTip}
            onMouseOut={this.hideTip}
          >
            <span id="open" className="text-secondary fas fa-lock-open" />
          </button>
        </div>
      );
    }
  }
}

export default LockedIcon;
