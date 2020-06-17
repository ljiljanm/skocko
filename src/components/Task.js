import React from "react";

class Task extends React.Component {
  render() {
    const completedStyle = {
      color: "#eee",
      textDecoration: "line-through",
      fontStyle: "italic",
    };
    return (
      <div>
        <input
          type="checkbox"
          onChange={() => this.props.changeCompletion(this.props.key)}
          checked={this.props.ischecked.completed}
        />
        <span style={this.props.ischecked.completed ? completedStyle : null}>
          {this.props.ischecked.text}
        </span>
      </div>
    );
  }
}

export default Task;
