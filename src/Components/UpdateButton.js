import React from "react";
import { CommonContext } from "./CommonContext";
function UpdateButton() {
  return (
    <CommonContext.Consumer>
      {({ updateColor }) => (
        <div className="container">
          <button
            className="btn btn-primary"
            onClick={() => updateColor("yellow")}
          >
            Change Color
          </button>
          <button
            className="btn btn-primary"
            onClick={() => updateColor("green")}
          >
            Change Color
          </button>
        </div>
      )}
    </CommonContext.Consumer>
  );
}
export default UpdateButton;
