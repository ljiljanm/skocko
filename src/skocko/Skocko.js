import React from "react";
import smiley from "./smiley.JPG";
import square from "./square.JPG";
import tref from "./tref.JPG";
import leaf from "./leaf.JPG";
import heart from "./heart.JPG";
import star from "./star.JPG";
import Guess from "./Guess";
import confirm from "./confirm.png";
import imgArray from "./imgArray.js";
import oneLineGuess from "./oneLineGuess.js";
import {
  ConfirmButton,
  SignContainer,
  GuessingContainer,
  Signs,
} from "./Skocko.skin";

class Skocko extends React.Component {
  state = {
    containerStyle: { visibility: "hidden" },
    positionCounter: 0,
    rowCounter: 0,
    currentRow: 0,
    imgArray: imgArray,
    arrayOfSolutions: "",
    solutionChecked: [false, false, false, false, false, false],
    oneLineGuess: oneLineGuess,
  };
  showContainer = () => {
    let newStyle = { visibility: "visible" };
    this.setState({
      containerStyle: newStyle,
    });
  };

  putGif = (img, imgNo) => {
    let { imgArray, rowCounter, positionCounter } = this.state;
    console.log(positionCounter);

    if (positionCounter <= 3) {
      imgArray[rowCounter][positionCounter].img = img;
      imgArray[rowCounter][positionCounter].imgNo = imgNo;
      positionCounter++;
    }
    this.setState({
      imgArray,
      positionCounter,
      rowCounter,
    });
    console.log(positionCounter);
    console.log("XXXXXXXX");
  };

  componentDidMount() {
    let arrayOfSolutions = [];
    for (let i = 0; i < 4; i++) {
      arrayOfSolutions[i] = Math.round(1 + Math.random() * 5);
    }
    this.setState({
      arrayOfSolutions: arrayOfSolutions,
    });
  }

  checkSolution = () => {
    let {
      imgArray,
      rowCounter,
      arrayOfSolutions,
      oneLineGuess,
      solutionChecked,
    } = this.state;
    solutionChecked[rowCounter] = true;
    this.setState({
      solutionChecked,
    });
    let usersGuess = imgArray[rowCounter].map((item) => item.imgNo);
    let noOfReds = 0;
    let noOfRedsAndYellows = 0;
    let noOfYellows = 0;
    let noOfGreys = 4;

    let noOfFlavours = new Array(6).fill(null).map((item) => (item = 0));
    console.log(noOfFlavours);
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 4; j++) {
        if (arrayOfSolutions[j] === i + 1) {
          noOfFlavours[i]++;
        }
      }
    }
    let usedArrayOfsolutions = new Array(4).fill(0);
    let usedUsersGuess = new Array(4).fill(0);
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (
          arrayOfSolutions[i] === usersGuess[j] &&
          usedArrayOfsolutions[i] === 0 &&
          usedUsersGuess[j] === 0
        ) {
          noOfRedsAndYellows++;
          usedArrayOfsolutions[j] = 1;
          usedUsersGuess[i] = 1;
          break;
        }
      }
    }
    for (let i = 0; i < 4; i++) {
      if (arrayOfSolutions[i] === usersGuess[i]) {
        noOfReds++;
      }
    }
    noOfYellows = noOfRedsAndYellows - noOfReds;
    console.log(noOfFlavours);
    noOfGreys = 4 - noOfReds - noOfYellows;
    let displayResult = [];
    for (let i = 0; i < noOfReds; i++) {
      displayResult.push(1);
    }
    for (let i = 0; i < noOfYellows; i++) {
      displayResult.push(2);
    }
    for (let i = 0; i < noOfGreys; i++) {
      displayResult.push(3);
    }
    oneLineGuess[rowCounter] = displayResult;
    rowCounter++;

    this.setState({
      oneLineGuess: oneLineGuess,
      positionCounter: 0,
      rowCounter,
    });
  };
  render() {
    let guesses = new Array(6).fill(0);
    let generateGuesses = guesses.map((item, index) => {
      return (
        <div className="guessing" key={index}>
          <Guess {...this.state} row={index} key={index}></Guess>
        </div>
      );
    });

    return (
      <div>
        <button className="startGame" onClick={this.showContainer}>
          Start Game
        </button>
        <GuessingContainer style={this.state.containerStyle}>
          <div>{generateGuesses}</div>
          <div className="confirmBtn">
            <ConfirmButton
              src={confirm}
              alt="confirm"
              onClick={this.checkSolution}
            />
          </div>{" "}
          {/* CARD SIGNS   */}
          <SignContainer>
            <Signs
              className="signs"
              id="smiley"
              onClick={() => this.putGif(smiley, 1)}
            >
              <img src={smiley} alt="smiley" />
            </Signs>
            <Signs
              className="signs"
              id="tref"
              onClick={() => this.putGif(tref, 2)}
            >
              <img src={tref} alt="tref" />{" "}
            </Signs>
            <Signs
              className="signs"
              id="leaf"
              onClick={() => this.putGif(leaf, 3)}
            >
              <img src={leaf} alt="leaf" />
            </Signs>
            <Signs
              className="signs"
              id="heart"
              onClick={() => this.putGif(heart, 4)}
            >
              <img src={heart} alt="heart" />
            </Signs>
            <Signs
              className="signs"
              id="square"
              onClick={() => this.putGif(square, 5)}
            >
              <img src={square} alt="square" />
            </Signs>
            <Signs
              className="signs"
              id="star"
              onClick={() => this.putGif(star, 6)}
            >
              <img src={star} alt="star" />
            </Signs>
          </SignContainer>
        </GuessingContainer>
        {/* <pre>{JSON.stringify(this.state.positionCounter)}</pre>
        <pre>{JSON.stringify(this.state.rowCounter)}</pre>
        <pre>{JSON.stringify(this.state.solutionChecked)}</pre>
        <pre>{JSON.stringify(this.state.arrayOfSolutions)}</pre>
        <pre>{JSON.stringify(this.state.oneLineGuess)}</pre>
        <pre>{JSON.stringify(this.state.imgArray)}</pre> */}
      </div>
    );
  }
}

export default Skocko;
