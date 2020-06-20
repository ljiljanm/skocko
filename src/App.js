import React from "react";
import Timer from "./countdown/Timer";
import StartButton from "./countdown/StartButton";
import TimerInput from "./countdown/TimerInput";

class App extends React.Component {
  state = {
    time: 60,
    startAgain: {
      visibility: "hidden",
    },
  };

  startCountdown = () => {
    let handleInterval = setInterval(() => {
      this.setState({
        time: this.state.time - 1,
      });
      if (this.state.time === 0) {
        clearInterval(handleInterval);
        this.setState({ startAgain: { visibility: "visible" } });
      }
    }, 1000);
  };
  startAgain = () => {
    this.setState({ time: 60 });
    this.startCountdown();
  };
  handleInput = (event) => {
    this.setState({ time: event.target.value });
  };
  render() {
    return (
      <div>
        <TimerInput handleInput={this.handleInput} />
        <Timer show={this.state.time} />
        <StartButton startCountdown={this.startCountdown} />
        <div style={this.state.startAgain}>
          <button onClick={this.startAgain}>Start again</button>
        </div>
      </div>
    );
  }
}

export default App;
