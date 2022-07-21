import "./App.css";
import React, { PureComponent } from "react";
export default class Son extends PureComponent {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    console.log("Re-rendering son dom");
    return (
      <div className="App">
        <h1>This is the count form App : {this.props.count}</h1>
      </div>
    );
  }
}
