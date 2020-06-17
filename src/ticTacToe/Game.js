import React from "react";
import Board from "./components/Board";

class Game extends React.Component {
  state = {};
  render() {
    return (
      <>
        <p>Game</p>
        <Board />
      </>
    );
  }
}

export default Game;
