import React, { forwardRef } from "react";
import "./App.css";
function Child(props, ref) {
  return (
    <div className="App">
      <input type="text" ref={ref} />
    </div>
  );
}
export default forwardRef(Child);
