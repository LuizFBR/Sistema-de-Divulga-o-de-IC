import React from "react";
import { Route, Switch } from "react-router-dom";
import ExamplePage from "../pages/example";
import LoginPage from "../pages/login";
import PageIC from "../pages/exemploIC";


const Routes = () => (
  <Switch>
    <Route path="/" exact component={ExamplePage} />
    <Route path="/login" component={LoginPage} />
    <Route path="/PageIC" component={PageIC} />
  </Switch>
);

export default Routes;
