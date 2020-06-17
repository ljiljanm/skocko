import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 7 },
      { id: 3, value: 2 },
      { id: 4, value: 0 },
      { id: 5, value: -10 },
      /* { i{d: 6, value: 0} },*/
    ],
  };
  handleDelete = (counterId) => {
    console.log("Event hanlder called", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: counters });
  };
  render() {
    return (
      <div>
        {this.state.counters.map((el) => (
          <Counter
            key={el.id}
            id={el.id}
            value={el.value}
            onDelete={this.handleDelete}
          >
            <h4>Brojac {el.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
