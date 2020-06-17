import React from "react";
import Joke from "./Joke";
import jokesData from "./jokesData";
import personData from "./personData";
import Person from "./Person";

class MyMain extends React.Component {
  render() {
    let jokeComponents = jokesData
      .filter((el) => el.question.length > 10)
      .map((joke) => (
        <Joke key={joke.id} question={joke.question} answer={joke.answer} />
      ));
    let personComponents = personData
      .filter((x) => x.age < 50)
      .map((person) => (
        <Person
          key={person.fname}
          fname={person.fname}
          lname={person.lname}
          age={person.age}
          sex={person.sex}
        />
      ));
    return (
      <div>
        <Person fname="Ljiljan" lname="Maks" age="33" sex="M" />
        {personComponents}
        <h1>Main content heading</h1>
        <p>main content with </p>
        {jokeComponents}
      </div>
    );
  }
}

export default MyMain;
