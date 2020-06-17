import React from "react";
import Button from "./calcComponents/Button";
import Input from "./calcComponents/Input";
import DoubleButton from "./calcComponents/DoubleButton";

let response = await fetch("https://api.thecatapi.com/v1/images/search");
let 

class Calculator extends React.Component {
  state = {
    input: "",
    previousDigit: "",
    currentDigit: "",
    operator: "",
    previousNumber: "",
    currentNumber: "",
    decPointAlreadyEntered: false,
    readyForNewInput: true,
    joke: "",
  };
  // I didn't solve the problem with this
  addToInput = (val) => {
    if (this.state.readyForNewInput)
      this.setState({ input: "", readyForNewInput: false });
    const { input } = this.state;
    const currentLength = input.length;
    if (currentLength > 17) return null;
    const prevDig = currentLength === 0 ? "" : input[currentLength - 1];
    if (currentLength === 1 && prevDig === "0" && val !== ".") return null;
    if (val === ".") {
      this.setState({
        decPointAlreadyEntered: true,
      });
    }
    if (prevDig === "." && val === ".") return null;
    if (val === "." && this.state.decPointAlreadyEntered) return null;
    this.setState({
      previousDigit: prevDig,
      input: this.state.input + val,
      currentDigit: val,
      readyForNewInput: false,
    });
  };
  addZeroToInput = () => {
    const currentLength = this.state.input.length;
    if (currentLength > 17) return null;
    const prevDig =
      currentLength === 0 ? "" : this.state.input[currentLength - 1];

    if (currentLength === 1 && prevDig === "0") return null;
    this.setState({
      previousDigit: prevDig,
      input: this.state.input + "0",
      currentDigit: "0",
    });
  };
  clearInput = () => {
    this.setState({
      decPointAlreadyEntered: false,
      input: "",
      readyForNewInput: true,
    });
  };
  changeSign = () => {
    const { input } = this.state;
    input[0] !== "-"
      ? this.setState({ input: `-${input}` })
      : this.setState({ input: input.slice(1) });
  };
  handleOperation = (val) => {
    this.setState({
      previousNumber: this.state.input,
      readyForNewInput: true,
      operator: val,
    });
  };
  handleEqual = () => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ joke: data.value });
      });
    let resultString;
    if (this.state.operator === "*") {
      resultString =
        parseFloat(this.state.input) * parseFloat(this.state.previousNumber);
    } else if (this.state.operator === "/") {
      resultString =
        parseFloat(this.state.previousNumber) / parseFloat(this.state.input);
    } else if (this.state.operator === "+") {
      resultString =
        parseFloat(this.state.input) + parseFloat(this.state.previousNumber);
    } else if (this.state.operator === "-") {
      resultString =
        parseFloat(this.state.previousNumber) - parseFloat(this.state.input);
    }
    this.setState({
      previousNumber: "",
      input: resultString,
      operator: "",
    });
  };
  styles = {
    color: "red",
    fontWeight: "bold",
  };
  componentDidMount() {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ joke: data.value });
      });
  }

  render() {
    // console.log(this.state.input.length, " ", this.state.previousDigit, " ");
   
    return (
      <div className="Calculator">
        <pre>{JSON.stringify(this.state, null, 1)}</pre>
        
        <div className="calc-wrapper">
          <div className="row">
            <Input inputvalue={this.state.input}></Input>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.handleOperation}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.handleOperation}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.handleOperation}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>.</Button>
            <Button handleClick={this.addZeroToInput}>0</Button>
            <Button handleClick={this.handleEqual}>=</Button>
            <Button handleClick={this.handleOperation}>-</Button>
          </div>
          <div className="row">
            <DoubleButton handleClick={this.clearInput}>CLEAR</DoubleButton>
            <DoubleButton handleClick={this.changeSign}> &plusmn;</DoubleButton>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
