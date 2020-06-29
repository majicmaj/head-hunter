import React from "react";
import { Switch, Route } from "react-router-dom";

import Resume from "../resume/Resume";
import Home from "../home/Home";
import Jobs from "../jobs/Jobs";

export default function Routes({ listings }) {
  return (
    <Switch className="Routes">
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/resume">
        <h1>Resume</h1>
        <Resume />
      </Route>
      <Route exact path="/jobs">
        <Jobs listings={listings} />
      </Route>
      <Route exact path="/sign_in">
        <h1>Sign In</h1>
      </Route>
    </Switch>
  );
}
