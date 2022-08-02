import React, { useEffect, useState } from "react";
export default function DelAcc() {
  let [user, setUser] = useState("");
  function deleteUser(id) {
    fetch(`https://testapimdkaif.herokuapp.com/Data/${id}`, {
      method: "DELETE"
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp);
      });
    });
  }
  return (
    <div className="container">
      <h1>Enter the _id of the user</h1>
      <input
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <button className="btn btn-danger" onClick={() => deleteUser(user)}>
        Delete
      </button>
    </div>
  );
}
