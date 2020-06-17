import React from "react";
import MyHeader from "./MyHeader";
import MyFooter from "./MyFooter";
import MyMain from "./MyMain";
import Todos from "./Todos";
//import todosDataOut from "./todosData";

class MyApp extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      count: 0,

      persons: [
        { id: 1, name: "Ljiljan", lname: "Maks" },
        { id: 2, name: "Petar", lname: "Petrovic" },
        { id: 3, name: "Mitar", lname: "Miric" },
      ],
      todosData: [
        { id: 1, text: "Mawh the lawn", completed: true },
        { id: 2, text: "Wash the dishes", completed: true },
        { id: 3, text: "Learn react", completed: false },
        { id: 4, text: "Larn JS", completed: true },
        { id: 5, text: "Learn German", completed: false },
      ],
      unreadMessages: ["Hi, Im samanta...."], //"Hello, what s going on",
    };
  }
  handleChange(id) {
    this.setState((prevState) => {
      const updatedTodos = prevState.todosData.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return { todosData: updatedTodos };
    });
  }
  componentDidMount() {
    setTimeout(() => this.setState({ count: 30 }), 1500);

    setTimeout(
      () =>
        this.setState((prevState) => {
          const updatedState = prevState.persons.map((person) => {
            if (person.name === "Petar") {
              person.lname = "Bozovic";
            }
            return person;
          });
          return { persons: updatedState };
        }),
      3300
    );
  }
  render() {
    let todosComponents = this.state.todosData.map((item) => (
      <Todos
        key={item.id}
        text={item.text}
        item={item}
        handleChange={this.handleChange}
      />
    ));
    let myPersons = this.state.persons.map((persona) => (
      <MyHeader key={persona.id} person={persona} />
    ));
    let date = new Date();
    return (
      <div>
        {this.state.unreadMessages.length > 0 && (
          <p> You have {this.state.unreadMessages.length} unread Messages</p>
        )}
        <div style={{ fontSize: 30, fontWeight: "bold" }}>
          {this.state.count}
        </div>
        <button onClick={() => console.log(this.state.todosData[0])}>
          Klik for item
        </button>
        {todosComponents}
        <p>pp</p>
        {myPersons}
        <hr />
        {`${date.getHours()} ${date.getMinutes()}`}
        <MyMain height="80" />
        <hr />
        <MyFooter />
      </div>
    );
  }
}

export default MyApp;
