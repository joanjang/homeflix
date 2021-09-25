import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Coins from "../Screens/Coins/index";
import Exchanges from "../Screens/Exchanges/index";
import Prices from "../Screens/Prices/index";

export default () => {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Prices} />
      <Route path="/exchanges" component={Exchanges} />
      <Route path="/coins" exact component={Coins} />
    </Router>
  );
};
