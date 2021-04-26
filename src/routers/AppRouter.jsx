import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

import { IndexNavbar } from "../components/Navbars/IndexNavbar";
import { Dec } from "../views/Dec";
import { Developers } from "../views/Developers";
import { Index } from "../views/Index";
import { Plans } from "../views/Plans";
import { Sign } from "../views/Sign";

export const AppRouter = () => {
  return (
    <Router>
      <IndexNavbar />
      <Switch>
        <Route path="/" exact>
          <Index />
        </Route>
        <Route path="/dec" exact>
          <Dec />
        </Route>
        <Route path="/sign" exact>
          <Sign />
        </Route>
        <Route path="/developers" exact>
          <Developers />
        </Route>
        <Route path="/plans" exact>
          <Plans />
        </Route>
      </Switch>
    </Router>
  );
};
