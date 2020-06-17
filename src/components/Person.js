import React from "react";

class Person extends React.Component {
  render() {
    return (
      <div>
        <h3>
          Name: {this.props.fname}, Last name: {this.props.lname}
        </h3>
        <h5>
          age: {this.props.age}, sex: {this.props.sex}
        </h5>
      </div>
    );
  }
}

export default Person;
