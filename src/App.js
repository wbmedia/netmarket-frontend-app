import React from "react";
import { Navigation } from "./components/base/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { Register } from "./components/Register";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact poth="/registrar" component={Register} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
