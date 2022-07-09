import { useState } from "react";
export default function Profile(props) {
  const [loggedIn, setStatus] = useState(1);
  // * now learning ternary operators
  return (
    <div className="App">
      {loggedIn==1 ? <h1>Welcome user1</h1> : loggedIn==2 ? <h1>Welcome user2</h1>: <h1>Welcome user</h1>}
    </div>
  );
  // ! this if else statements can be replace with ternary operators
  //   if (loggedIn) {
  //     return (
  //       <div className="App">
  //         <h1>Welcome Monu</h1>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div className="App">
  //         <h1>Welcome guest</h1>
  //       </div>
  //     );
  //   }
}
