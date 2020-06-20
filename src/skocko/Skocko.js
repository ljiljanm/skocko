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
  Timer,
} from "./Skocko.skin";

class Skocko extends React.Component {
  state = {
    containerStyle: { visibility: "hidden" },
    showSolutions: { visibility: "hidden" },
    positionCounter: 0,
    rowCounter: 0,
    imgArray: imgArray,
    arrayOfSolutions: ["", "", "", ""],
    imgArrayOfSolutions: ["", "", "", ""],
    solutionChecked: [false, false, false, false, false, false],
    oneLineGuess: oneLineGuess,
    countdownTime: 60,
    timerStyle: { fontWeight: "lighter" },
  };
  showContainer = () => {
    let newStyle = { visibility: "visible" };

    let setIntHandler = setInterval(() => {
      this.setState({
        countdownTime: this.state.countdownTime - 1,
      });
      if (this.state.countdownTime < 20) {
        this.setState({
          timerStyle: { fontWeight: "bold", color: "red" },
        });
      }
      if (this.state.countdownTime < 11) {
        this.setState({
          timerStyle: { fontWeight: "bolder", color: "yellow" },
        });
      }
      if (this.state.countdownTime === 0) {
        clearInterval(setIntHandler);
        this.setState({
          showSolutions: { visibility: "visible" },
        });
      }
      if (this.state.showSolutions.visibility === "visible") {
        clearInterval(setIntHandler);
      }
    }, 1000);
    this.setState({
      containerStyle: newStyle,
    });
    let { arrayOfSolutions } = this.state;
    let imgArrayOfSolutions = arrayOfSolutions.map((item) => {
      switch (item) {
        case 1:
          item = smiley;
          break;
        case 2:
          item = tref;
          break;
        case 3:
          item = leaf;
          break;
        case 4:
          item = heart;
          break;
        case 5:
          item = square;
          break;
        case 6:
          item = star;
          break;
        default:
          item = null;
      }
      return item;
    });
    this.setState({
      imgArrayOfSolutions,
    });
  };

  putGif = (img, imgNo) => {
    let { imgArray, rowCounter, positionCounter, showSolutions } = this.state;
    // console.log(positionCounter);

    if (positionCounter <= 3 && showSolutions.visibility !== "visible") {
      imgArray[rowCounter][positionCounter].img = img;
      imgArray[rowCounter][positionCounter].imgNo = imgNo;
      positionCounter++;
    }
    this.setState({
      imgArray,
      positionCounter,
      rowCounter,
    });
    // console.log(positionCounter);
    // console.log("XXXXXXXX");
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
    // console.log(noOfFlavours);
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
          usedArrayOfsolutions[i] = 1;
          usedUsersGuess[j] = 1;
          break;
        }
      }
    }
    for (let i = 0; i < 4; i++) {
      if (arrayOfSolutions[i] === usersGuess[i]) {
        noOfReds++;
      }
    }
    if (noOfReds === 4) {
      this.setState({
        showSolutions: { visibility: "visible" },
      });
    }
    noOfYellows = noOfRedsAndYellows - noOfReds;
    // console.log(noOfFlavours);
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
    if (rowCounter === 6) {
      this.setState({
        showSolutions: { visibility: "visible" },
      });
    }
  };
  render() {
    let { imgArrayOfSolutions } = this.state;
    let guesses = new Array(6).fill(0);
    let generateGuesses = guesses.map((item, index) => {
      return (
        <div className="guessing" key={index}>
          <Guess {...this.state} row={index} key={index}></Guess>
        </div>
      );
    });
    let printSolution = imgArrayOfSolutions.map((item, index) => {
      if (item !== "") {
        return (
          <div
            style={this.state.showSolutions}
            className="singleGuess"
            key={index}
          >
            <img width="45" height="53" src={item} alt="" />
          </div>
        );
      } else return null;
    });

    return (
      <div>
        <button className="startGame" onClick={this.showContainer}>
          Start Game
        </button>
        <GuessingContainer style={this.state.containerStyle}>
          <div>
            {generateGuesses}
            <div style={{ marginLeft: "9px", display: "flex" }}>
              {printSolution}
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Timer style={this.state.timerStyle}>
              {this.state.countdownTime}
            </Timer>
            <div className="confirmBtn">
              <ConfirmButton
                src={confirm}
                alt="confirm"
                onClick={this.checkSolution}
              />
            </div>
          </div>
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
        <pre>{JSON.stringify(this.state.countdownTime)}</pre>
        <pre>{JSON.stringify(this.state.rowCounter)}</pre>
        <pre>{JSON.stringify(this.state.solutionChecked)}</pre>
        <pre>{JSON.stringify(this.state.arrayOfSolutions)}</pre>
        <pre>{JSON.stringify(this.state.imgArrayOfSolutions)}</pre>
        <pre>{JSON.stringify(this.state.oneLineGuess)}</pre> */}
      </div>
    );
  }
}

export default Skocko;
