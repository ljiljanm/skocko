import React from "react";

class TimerInput extends React.Component {
  state = {};
  render() {
    return (
      <div style={{ marginLeft: 100 }}>
        <h3>Input youer desired time</h3>
        <input type="number" onChange={this.props.handleInput} />
      </div>
    );
  }
}

export default TimerInput;
