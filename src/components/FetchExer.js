import React from "react";

class FetchExer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      character: {},
    };
  }
  componentDidMount() {
    this.setState({ loading: true });
    fetch(`https://swapi.dev/api/planets/3`)
      .then((response) => response.json())
      .then((data) => this.setState({ loading: false, character: data }));
  }
  render() {
    const myArray = Object.keys(this.state.character).map((item) => (
      <li key={item}>
        {item}:{this.state.character[item]}
      </li>
    ));

    return (
      <div>
        <ul>{this.state.loading ? "Loading" : myArray}</ul>
      </div>
    );
  }
}
export default FetchExer;
