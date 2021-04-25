import React from "react";
import { Route, Switch } from "react-router-dom";
import ExamplePage from "../pages/example";
import LoginPage from "../pages/login";
const Routes = () => (
  <Switch>
    <Route path="/" exact component={ExamplePage} />
    <Route path="/login" component={LoginPage} />
  </Switch>
);

export default Routes;
