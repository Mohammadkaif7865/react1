import React from "react";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <>
      <Link to="/">Home Page</Link> <br />
      <br />
      <Link to="/about">About Page</Link> <br /> <br />
      <Link to="/login">Login</Link>
    </>
  );
}
