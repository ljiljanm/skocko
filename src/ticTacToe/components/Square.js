import React from "react";

class Square extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     buttonClass: "square",
  //     value: "0",
  //   };
  // }

  // updateButton = () => {
  //   this.setState((prevState) => {
  //     return prevState.buttonClass === "square colored"
  //       ? { buttonClass: "square", value: "0" }   () => this.props.onClick()
  //       : { buttonClass: "square colored", value: "X" };
  //   });
  // };
  render() {
    return (
      <>
        {/* <pre>{JSON.stringify(this.state.anotherState, null, 0)}</pre> */}
        <button className="square" onClick={this.props.onClick}>
          {this.props.value}
        </button>
      </>
    );
  }
}

export default Square;
