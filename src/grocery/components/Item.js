import React from "react";
import Ordered from "./Ordered";

class Item extends React.Component {
  state = {
    ord: 0,
  };
  increase = (e) => {
    e.preventDefault();
    this.setState({ ord: this.state.ord + 1 });
  };
  decrease = (e) => {
    e.preventDefault();
    if (this.state.ord > 0) {
      this.setState({ ord: this.state.ord - 1 });
    }
  };
  reset = (e) => {
    e.preventDefault();
    this.setState({ ord: 0 });
  };
  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.state, null, 1)}</pre>
        {this.props.children}
        {/* {this.props.ordered + this.state.ord} */}
        <Ordered ordered={this.state.ord} />
        <button onClick={this.increase}>+</button>
        <button onClick={this.decrease}>-</button>
        <button onClick={this.reset}>Reset</button>
        <button>Delete</button>
      </div>
    );
  }
}

export default Item;
