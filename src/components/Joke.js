import React from "react";

class Joke extends React.Component {
  render() {
    return (
      <div style={{ background: "grey" }}>
        <h3 style={{ display: !this.props.question && "none" }}>
          Question: {this.props.question}
        </h3>
        <h3
          style={{
            color: !this.props.question && "#eee",
            background: !this.props.answer && "#edd",
          }}
        >
          Answer: {this.props.answer}
        </h3>
        <hr />
      </div>
    );
  }
}
export default Joke;
