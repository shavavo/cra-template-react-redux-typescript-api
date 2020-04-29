import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { createBrowserHistory } from "history";
import { Router, Switch, Route } from "react-router-dom";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/"></Route>
      </Switch>
    </Router>
  );
}

export default App;
