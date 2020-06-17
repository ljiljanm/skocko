import React from "react";

class MyHeader extends React.Component {
  render() {
    return (
      <div>
        <h1>header1 with {this.props.person.lname}</h1>
        <p>Header content</p>
      </div>
    );
  }
}

export default MyHeader;
