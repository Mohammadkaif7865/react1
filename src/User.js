import { withRouter } from "react-router-dom";
import React from "react";
function User(props) {
  return (
    <div className="App">
      <h1>This is a user named : {props.match.params.name}</h1>
      <h1>UID : {props.match.params.id}</h1>
    </div>
  );
}
// # withRoute use as higher order function
export default withRouter(User);
