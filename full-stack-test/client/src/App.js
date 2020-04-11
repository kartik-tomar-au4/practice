import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import MainHeader from "./components/MainHeader";
import HomePage from "./components/HomePage";
import BuyPage from "./components/BuyPage";
import SellPage from "./components/SellPage";

class App extends React.Component {
  render() {
    return (
      <Router>
        <MainHeader />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/buy" component={BuyPage} />
        <Route exact path="/sell" component={SellPage} />
      </Router>
    );
  }
}

export default App;
