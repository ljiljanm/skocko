import React from "react";
import Bt from "./bt";
import Matrix from "./Matrix";
import ArrayConfig from "./arrayConfig";

class Array extends React.Component {
  state = { len: 0, ar: [], check: "" };

  componentDidMount() {
    let len = Math.round(1 + Math.random() * 12);
    this.setState({ len: len });
    let ar = [];
    for (let i = 0; i < len; i++) {
      ar[i] = 0;
    }
    this.setState({ ar: ar });
  }
  changeColor = () => {
    this.setState({ check: "Uaaa" });
  };
  changeBorder = () => {
    this.setState({ check: "rriii" });
  };
  render() {
    let { ar } = this.state;
    let arLi = [];
    arLi = ar.map((item) => (
      <Bt
        key={item + Math.random()}
        className="horDiv"
        handleClick={this.changeColor}
        handleMouseOver={this.changeBorder}
      >
        {item * item}
      </Bt>
    ));
    arLi = <div className="outerDiv">{arLi}</div>;
    return (
      <div>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
        <h1>hello</h1>
        {arLi}
        <Matrix />
        <img alt="search" src={require("../assets/icons/searchIcon.png")} />
        <ArrayConfig> Ljiljan Maksimovic </ArrayConfig>
      </div>
    );
  }
}

export default Array;
