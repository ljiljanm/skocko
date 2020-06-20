import React from "react";

class StartButton extends React.Component {
  state = {};
  render() {
    return (
      <div style={{ marginLeft: 130 }}>
        <button onClick={this.props.startCountdown}>Start</button>
      </div>
    );
  }
}

export default StartButton;
