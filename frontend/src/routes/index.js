import React from "react";
import { Route, Switch } from "react-router-dom";
import ExamplePage from "../pages/example";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={ExamplePage} />
  </Switch>
);

export default Routes;
