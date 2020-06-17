import React from "react";
import Item from "./components/Item";

class Grocery extends React.Component {
  state = {
    items: ["Potato", "Cabbage", "Onion", "Carrot"],
    orderedItems: new Array(4).fill(0), //[1, 0, 2, 3],
  };
  render() {
    let { items, orderedItems } = this.state;
    items = items.map((item, index) => (
      <Item ordered={this.state.orderedItems[index]} key={index}>
        {item}
      </Item>
    ));
    orderedItems = orderedItems.map((item) => (
      <div key={Math.random()}>{item}</div>
    ));
    return (
      <div>
        <pre>{JSON.stringify(this.state, null, 1)}</pre>
        <div>{items}</div>
        <div>{orderedItems}</div>
      </div>
    );
  }
}

export default Grocery;
