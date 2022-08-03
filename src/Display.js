import React, { useEffect, useRef } from "react";
export default function Display(props) {
  const lastVal = useRef();
  const lastValLast = useRef();
  useEffect(() => {
    lastValLast.current = lastVal.current;
    lastVal.current = props.count;
    // # It will pick the value of count from the the dom
  });
  // const previousVal = lastVal.current;
  return (
    <div className="container">
      <h1>This the current value : {props.count}</h1>
      <h1>This the Previous value : {lastVal.current}</h1>
      <h1>This the Previous value : {lastValLast.current}</h1>
    </div>
  );
}
