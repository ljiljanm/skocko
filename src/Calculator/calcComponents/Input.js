import React from "react";
import "./Input.css";

class Input extends React.Component {
  state = {};
  render() {
    return <div className="input">{this.props.inputvalue}</div>;
  }
}

export default Input;
