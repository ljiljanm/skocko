import React from "react";
import Game from "./Game";

class Cyclic extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <p>Enter the number of the graph nodes:</p>
        <Game />
      </div>
    );
  }
}

export default Cyclic;
