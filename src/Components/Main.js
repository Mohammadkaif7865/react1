import React from "react";
import { CommonContext } from "./CommonContext";
function Main() {
  return (
    <CommonContext.Consumer>
      {({ color }) => (
        <h1 style={{ backgroundColor: color }}>
          Hello , this is main function
        </h1>
      )}
    </CommonContext.Consumer>
  );
}
export default Main;
