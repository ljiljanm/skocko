import React from "react";

class Timer extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <h3>{this.props.show}</h3>
      </div>
    );
  }
}

export default Timer;
