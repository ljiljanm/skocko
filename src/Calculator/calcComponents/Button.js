import React from "react";
import "./Button.css";

class Button extends React.Component {
  state = {};
  isOperator = (val) => {
    return val === "*" || val === "/" || val === "+" || val === "-";
  };
  render() {
    let classForBtn = this.isOperator(this.props.children)
      ? "button operator"
      : "button";
    return (
      <div
        className={classForBtn}
        onClick={() => this.props.handleClick(this.props.children)}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Button;
