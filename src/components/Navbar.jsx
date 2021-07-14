import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">
        <h1>Don't Break the Cycle</h1>
      </Link>
      <Link to="/maintenance">Maintanance</Link>
      <Link to="/safety">Safety</Link>
    </nav>
  )

}