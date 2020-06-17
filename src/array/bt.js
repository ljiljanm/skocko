import React from "react";
class Bt extends React.Component {
  state = {};
  render() {
    return (
      <div
        className="horDiv"
        onClick={this.props.handleClick}
        onMouseOver={this.props.handleMouseOver}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Bt;
