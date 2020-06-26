import React from "react";
import { Switch, Route } from "react-router-dom";

import Resume from "../resume/Resume";
import Home from "../home/Home";
export default function Routes() {
  return (
    <Switch className="Routes">
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/resume">
        <h1>Resume</h1>
      </Route>
      <Route exact path="/jobs">
        <h1>Jobs</h1>
      </Route>
      <Route exact path="/sign_in">
        <h1>Sign In</h1>
      </Route>
    </Switch>
  );
}
