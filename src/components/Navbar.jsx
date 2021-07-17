import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">
        Home
      </Link>
      <Link to="/maintenance">Maintanance</Link>
      <Link to="/safety">Safety</Link>
      <Link to="/new-tips">Add Tips</Link>
    </nav>
  )

}