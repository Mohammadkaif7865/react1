import React from "react";
import { useState } from "react";
export default function User(props) {
  // let [sum,setSum] = useState(0);
  // setSum(props.function(2,3));
  console.log(props.sum(2,4));
  return (
    <div className="App">
      <h1>This is the place where we will receive the function </h1>
      <h1>answer is {props.sum(2,4)}</h1>
    </div>
  );
}
