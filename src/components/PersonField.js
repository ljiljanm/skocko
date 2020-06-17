import React from "react";

class PersonField extends React.Component {
  render() {
    return (
      <p>
        Name:
        {this.props.person.fname}
        <span style={{ fontStyle: "italic" }}> {this.props.person.lname}</span>
        <span> {this.props.person.age}</span> years old.
      </p>
    );
  }
}

export default PersonField;
