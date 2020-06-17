import React from "react";
import Btn from "./Btn";

class Game extends React.Component {
  state = {
    n: 0,
    contents: [],
  };
  handleBtnClick = (index) => {
    let { n } = this.state;
    let newArrOfVals = [...this.state.contents];
    let { counter } = newArrOfVals[index];
    let i = index % n;
    let j = Math.floor(index / n);
    let aux = i;
    i = j;
    j = aux;
    let simmetricalIndex = n * j + i;
    if (counter % 2 === 0) {
      newArrOfVals[index].val = "*";
      newArrOfVals[simmetricalIndex].val = "*";
    } else {
      newArrOfVals[index].val = "";
      newArrOfVals[simmetricalIndex].val = "";
    }
    newArrOfVals[index].counter = counter + 1;
    this.setState({ contents: newArrOfVals });
  };
  renderBtn = (par) => {
    return (
      <Btn
        value={par}
        stateVal={this.state.contents[par].val}
        onClick={() => this.handleBtnClick(par)}
      />
    );
  };

  renderAllButtons = (par) => {
    let matrixContainer = new Array(par);

    for (let j = 0; j < par; j++) {
      let indexesOfUnclickable = new Array(par).fill(0);
      let nums = [];
      for (let i = 0; i < par; i++) {
        if (i <= j) {
          indexesOfUnclickable[i] = 1;
        }
        nums[i] = i + j * par;
      }
      let renderDisplay = nums.map((item, index) => {
        return (
          <Btn
            n={this.state.n}
            value={item}
            key={Math.random()}
            stateVal={this.state.contents[item].val}
            onClick={() => this.handleBtnClick(item)}
            clickable={indexesOfUnclickable[index] === 1 ? true : false}
          />
        );
      });
      //this.renderBtn(item));
      renderDisplay = (
        <div className="row">
          {renderDisplay}
          <span className="sideSpan" key={j}>
            {" "}
            {j + 1}{" "}
          </span>
        </div>
      );
      matrixContainer[j] = <div>{renderDisplay}</div>;
    }
    let arr = [];
    for (let i = 1; i <= par; i++) arr[i] = i;
    let renderHeader = arr.map((item) => (
      <span className="header" key={item}>
        {item}
      </span>
    ));
    let mess1 = "Fill in the matrix of paths of the graph, eg click on";
    let mess2 = " the field between the nodes that are connected with a path:";
    matrixContainer = matrixContainer.map((item) => <div>{item}</div>);
    matrixContainer = (
      <div>
        {this.state.n > 0 && mess1}
        <br /> {this.state.n > 0 && mess2}
        <br />
        <br />
        {renderHeader}
        {matrixContainer}
      </div>
    );
    return matrixContainer;
  };
  initiateMatrix = (event) => {
    let n = event.target.value;
    this.setState({
      n,
    });
    let arrayOfVals = new Array(n * n)
      .fill(null)
      .map((item) => ({ val: null, counter: 0 }));
    this.setState({ contents: arrayOfVals });
  };
  render() {
    return (
      <>
        <div className="container">
          <div>{/* <pre>{JSON.stringify(this.state, null, 1)}</pre> */}</div>
          <div>
            <input type="number" onChange={this.initiateMatrix} />

            <div style={{ marginTop: "15px", padding: "10px" }}>
              {this.renderAllButtons(this.state.n)}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Game;
