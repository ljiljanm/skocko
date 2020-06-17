import React from "react";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      adress: "",
      yearsOfExp: "",
      workedHere: "",
      JS: false,
      Java: false,
      CCplus: false,
      Python: false,
      favColor: "blue",
    };
    this.handleEvent = this.handleEvent.bind(this);
  }
  handleEvent(event) {
    let { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }
  render() {
    const dataToPrint = (
      <p>
        Name: {this.state.fname} {this.state.lname}, adress:
        {this.state.adress}, with {this.state.yearsOfExp} years of experience in{" "}
        {this.state["JS"] ? Object.keys(this.state)[5] : ""}
        {this.state.Java ? "Java, " : ""}
        {this.state.CCPlus ? "C/C++, " : ""}
        {this.state.Python ? "Python " : ""}. He{" "}
        {this.state.workedHere === "true" ? "worked here" : "didn't work here"}
      </p>
    );
    return (
      <div>
        <form>
          <label htmlFor="fname">
            First Name:
            <input
              type="text"
              name="fname"
              id="fname"
              minLength="2"
              maxLength="12"
              onChange={this.handleEvent}
              value={this.state.fname}
            />
            <br />
          </label>
          <label htmlFor="lname">
            Last Name:
            <input
              type="text"
              name="lname"
              id="lname"
              minLength="2"
              maxLength="12"
              onChange={this.handleEvent}
              value={this.state.lname}
            />
            <br />
          </label>
          <label htmlFor="adress">
            Adress:
            <input
              type="text"
              name="adress"
              id="adress"
              onChange={this.handleEvent}
              value={this.state.adress}
            />
            <br />
          </label>
          <label htmlFor="yearsOfExp">
            Years of experience:
            <input
              type="number"
              name="yearsOfExp"
              id="yearsOfExp"
              min="0"
              max="30"
              onChange={this.handleEvent}
              value={this.state.yearsOfExp}
            />
            <br />
          </label>
          <br />
          Did you work here previously:
          <br />
          <input
            type="radio"
            name="workedHere"
            id="workedHere"
            onChange={this.handleEvent}
            value="true"
          />
          <label htmlFor="workedHere">Yes</label>
          <br />
          <input
            type="radio"
            name="workedHere"
            id="notworkedHere"
            onChange={this.handleEvent}
            value="false"
          />
          <label htmlFor="notworkedHere">No</label>
          <br />
          <input
            type="radio"
            name="workedHere"
            id="dontR"
            onChange={this.handleEvent}
            value="nodata"
          />
          <label htmlFor="dontR">Don't remember </label>
          <fieldset>
            <legend>experience in following languages:</legend>
            <input
              type="checkbox"
              id="JS"
              name="JS"
              onChange={this.handleEvent}
              checked={this.state.JS}
            />
            <label htmlFor="JS">JavaScript</label>
            <br />
            <input
              type="checkbox"
              id="Java"
              checked={this.state.Java}
              name="Java"
              onChange={this.handleEvent}
            />
            <label htmlFor="Java">Java</label>
            <br />
            <input
              type="checkbox"
              id="CCplus"
              checked={this.state.CCplus}
              name="CCplus"
              onChange={this.handleEvent}
            />
            <label htmlFor="CCplus">C/C++</label>
            <br />
            <input
              type="checkbox"
              id="Python"
              checked={this.state.Python}
              name="Python"
              onChange={this.handleEvent}
            />
            <label htmlFor="Python">Python</label>
          </fieldset>
          <fieldset>
            <legend>Choose your favourite color: </legend>
            <select
              value={this.state.favColor}
              name="favColor"
              onChange={this.handleEvent}
            >
              <option value="blue">Blue</option>
              <option value="red">Red</option>
              <option value="green">Green</option>
            </select>
          </fieldset>
        </form>
        <textarea rows="11" cols="33" value={"some value"} />
        {this.state.fname !== "" ? dataToPrint : ""}
        <p>Your favourite color is {this.state.favColor}</p>
      </div>
    );
  }
}
export default NameForm;
