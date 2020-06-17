import React from "react";
import Bt from "./Bt";

class Cyclic extends React.Component {
  state = {
    noOfNodes: "",
    arrayOfConnections: [
      [2, 3],
      [3, 5],
    ],
  };
  getNoOfNodes = () => {
    let noOfNodes = document.getElementById("noOfNodes").value;
    this.setState({
      noOfNodes: noOfNodes,
    });
    console.log(this.state.noOfNodes);
  };
  generateMatrix = () => {
    let { noOfNodes } = this.state;
    let arrayOfConnections = new Array(noOfNodes);
    for (let i = 0; i < noOfNodes; i++) {
      arrayOfConnections[i] = new Array(noOfNodes);
      for (let j = 0; j < noOfNodes; j++) {
        arrayOfConnections[i][j] = Math.round(
          Math.random() * 3 * noOfNodes ** 2
        );
      }
    }
    this.setState({
      arrayOfConnections: arrayOfConnections,
    });
  };
  render() {
    let { noOfNodes, arrayOfConnections } = this.state;
    console.log(arrayOfConnections[0]);
    let arrayOfEls = [];
    for (let i = 0; i < noOfNodes; i++) {
      arrayOfEls.push(
        arrayOfConnections[0].map((item) => (
          <Bt key={Math.round(1 + Math.random() * 999)} />
        ))
      );
    }
    return (
      <div>
        Enter the number of nodes:
        <input type="number" id="noOfNodes" onChange={this.getNoOfNodes} />
        Generate the matrix to fill in between which nodes there is a
        path(connection):
        <button onClick={this.generateMatrix}>Generate</button>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
        <div>{arrayOfEls}</div>
      </div>
    );
  }
}

export default Cyclic;
