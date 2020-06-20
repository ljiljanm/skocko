import React from "react";
import grey from "./grey.jpg";
import yellow from "./yellow.jpg";
import red from "./red.jpg";

class Guess extends React.Component {
  state = {};
  render() {
    let arr = new Array(4).fill(0);
    let { oneLineGuess, imgArray, row, solutionChecked } = this.props;
    let displayResult = oneLineGuess[row].map((item) => {
      if (item === 1) return <img class="result" src={red} alt="red" />;
      else if (item === 2)
        return <img class="result" src={yellow} alt="yellow" />;
      else if (item === 3) return <img class="result" src={grey} alt="grey" />;
      else return null;
    });
    let renderGuess = arr.map((item, index) => {
      return (
        <div className="singleGuess" key={index}>
          <img
            width="45"
            height="53"
            src={this.props.imgArray[this.props.row][index].img}
            alt=""
            onClick={this.props.removeRow}
          />
        </div>
      );
    });
    return (
      <div className="classWithinComp">
        {renderGuess}
        {imgArray[row][3].img !== "" && solutionChecked[row] === true
          ? displayResult
          : ""}
      </div>
    );
  }
}

export default Guess;
