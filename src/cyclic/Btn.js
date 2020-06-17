import React from "react";

class Btn extends React.Component {
  state = {};
  render() {
    let displayValue = this.props.stateVal;
    // if (this.props.stateVal !== null) {
    //   displayValue = this.props.stateVal;
    // }
    // let { value, n } = this.props;
    // let myStyle = {};
    // if (value % (n + 1) === 0) {
    //   myStyle = { backgroundColor: "#555555" };
    //   console.log(value);
    // }
    return (
      <>
        <button
          // style={myStyle}
          onClick={() => this.props.onClick()}
          disabled={this.props.clickable}
        >
          {displayValue}
        </button>
      </>
    );
  }
}

export default Btn;
