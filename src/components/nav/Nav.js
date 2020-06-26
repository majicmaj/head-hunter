import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Routes() {
  return (
    <nav className="Nav">
      <Link className="link logo" to="/">
        <h1>HEAD HUNTER</h1>
      </Link>
      <div className="links">
        <Link className="link" to="/jobs">
          Jobs
        </Link>
        <Link className="link" to="/resume">
          Resume
        </Link>
        <Link className="link signin" to="/sign_in">
          Sign In
        </Link>
      </div>
    </nav>
  );
}
