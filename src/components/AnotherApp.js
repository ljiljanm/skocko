import React from "react";
import personData from "./personData";
import PersonField from "./PersonField";
import todosDataOut from "./todosData";
import Task from "./Task";

class AnotherApp extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      showPersons: false,
      sexCond: "M",
    };
  }
  componentDidMount() {
    setTimeout(() => this.setState({ loggedIn: true }), 3000);
  }
  logIn = () => {
    this.setState({ loggedIn: !this.state.loggedIn });
  };
  letShowPersons = () => {
    this.setState((prevState) => {
      const updatedState = !prevState.showPersons;
      return { showPersons: updatedState };
    }); //{ showPersons: !this.state.showPersons }
  };
  changeCompletion = (id) => {
    id.completed = !id.completed;
  };
  render() {
    let buttonText = this.state.showPersons
      ? "Hide persons"
      : "Print me all names";
    let displayText = `Log ${this.state.loggedIn ? "out" : "in"}`;
    let displayPersons = personData
      .filter((p) => p.sex === this.state.sexCond)
      .map((person) => <PersonField key={person.name} person={person} />);
    let tasksList = todosDataOut.map((task) => (
      <Task
        key={task.key}
        ischecked={task}
        changeCompletion={this.changeCompletion}
      />
    ));

    return (
      <div>
        <h3>You're logged {this.state.loggedIn ? "in" : "out"} </h3>
        <button onClick={this.logIn}>{displayText}</button>
        <button onClick={this.letShowPersons}>{buttonText}</button>
        {this.state.showPersons && displayPersons}
        {tasksList}
      </div>
    );
  }
}
export default AnotherApp;
