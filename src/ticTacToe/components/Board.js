import React from "react";
import Square from "./Square";

class Board extends React.Component {
  state = {
    squares: new Array(9).fill(null),
    numOfClicks: 0,
  };
  handleClick = (n) => {
    const squares = [...this.state.squares];
    if (this.state.numOfClicks % 2 === 0) squares[n] = "X";
    else squares[n] = "O";
    this.setState({
      squares: squares,
      numOfClicks: this.state.numOfClicks + 1,
    });
  };
  renderSquare = (n) => {
    return (
      <Square
        value={this.state.squares[n]}
        onClick={() => this.handleClick(n)}
      />
    );
  };
  render() {
    const status = "Next player: X";
    return (
      <div>
        <pre>{JSON.stringify(this.state, null, 1)}</pre>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;
