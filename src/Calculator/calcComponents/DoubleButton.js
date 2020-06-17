import React from "react";
import "./DoubleButton.css";

class DoubleButton extends React.Component {
  state = {};
  render() {
    return (
      <div
        onClick={() => this.props.handleClick(this.props.children)}
        className="clear-button"
      >
        {this.props.children}
      </div>
    );
  }
}

export default DoubleButton;
