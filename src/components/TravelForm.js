import React from "react";
import FormElement from "./FormElement";

class TravelForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      age: "",
      gender: "",
      kosher: false,
      hallal: "",
      lactose: false,
      gluten: "",
      destination: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <p style={{ textAlign: "center" }}>LM Tours</p>
        <h2>Hi, lets organise your trip!!!</h2>
        <h3>Fill in the following form please:</h3>
        <FormElement handleChange={this.handleChange} {...this.state} />
      </div>
    );
  }
}

export default TravelForm;
