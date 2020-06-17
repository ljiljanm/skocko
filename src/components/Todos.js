import React from "react";

class Todos extends React.Component {
  render() {
    return (
      <div>
        <input
          type="checkbox"
          checked={this.props.item.completed}
          onChange={() => this.props.handleChange(this.props.item.id)}
        />
        <p style={{ display: "inline" }}>{this.props.text}</p>
        <br />
        <br />
      </div>
    );
  }
}

export default Todos;
