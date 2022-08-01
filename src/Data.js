import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
export default function Data() {
  let [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://testapimdkaif.herokuapp.com/Data").then((result) => {
      result.json().then((resp) => {
        setData(resp);
      });
    });
  }, []);
  console.log(data);
  return (
    <div className="App">
      <h1>This is for API calling</h1>
      <Table striped hover variant="dark">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i}>
              <td>{i+1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
