import React from "react";
import Header from "./components/Header";
import MemeGenerator from "./components/MemeGenerator";

class MemeGen extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <MemeGenerator />
        <Header />
        <p>Hi</p>
      </div>
    );
  }
}
export default MemeGen;
