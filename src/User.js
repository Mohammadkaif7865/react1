import { withRouter } from "react-router-dom";
function User(props) {
  console.log(props);
  return (
    <div className="App">
      <h1>This is a user component</h1>
    </div>
  );
}

export default withRouter(User);
