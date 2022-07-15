import React, { Component } from "react";
import "./App.css";
class Child extends Component {
  componentWillUnmount() {
    console.log("component is unmounted");
  }
  render() {
    return (
      <div className="App">
        <h1>This is the child component </h1>
      </div>
    );
  }
}
export default Child;
