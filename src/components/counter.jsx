import React, { Component } from "react";
class Counter extends Component {
  state = {
    value: this.props.value, //this.props.value,
    place: this.props.place,
  };
  handleClick = () => {
    this.setState({ value: this.state.value + 1 }); //this.state.count + 1
  };
  render() {
    console.log("props", this.props);
    return (
      <React.Fragment>
        {this.props.children}
        <span className={this.changeClass()}>{this.formatCount()}</span>
        <button onClick={this.handleClick} style={{ fontSize: 30 }}>
          Increment {this.state.place}
        </button>
        <button
          className="cl0"
          onClick={() => this.props.onDelete(this.props.id)}
        >
          Delete
        </button>
      </React.Fragment>
    );
  }
  changeClass() {
    let classes = "spanStyle ";
    classes += `cl${this.state.value % 3}`;
    return classes;
  }

  formatCount() {
    // fnc for printing strin "Zero" instead of number 0
    let { value } = this.state;
    return value === 0 ? "Zero" : value === 2 ? "Two?" : value;
  }
}

export default Counter;
