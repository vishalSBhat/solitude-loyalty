import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const App = () => (
  <div>
    <div className="background"></div>
    <Navigation />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/menu" component={Menu} />
      <Redirect to="/" component={Home} />
    </Switch>
    <Footer />
  </div>
);

export default App;
