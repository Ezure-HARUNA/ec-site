import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/pages/homepage/HomePage";
import ShopPage from "./components/pages/shop/Shop";
import HatsPage from "./components/pages/hatspage/HatsPage";
import SneakersPage from "./components/pages/sneakerspage/SneakersPage";
import JacketsPage from "./components/pages/jacketspage/JacketsPage";
import MensPage from "./components/pages/menspage/MensPage";
import WomensPage from "./components/pages/womenspage/WomensPage";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/hats" component={HatsPage} />
          <Route exact path="/jackets" component={JacketsPage} />
          <Route exact path="/sneakers" component={SneakersPage} />
          <Route exact path="/mens" component={MensPage} />
          <Route exact path="/womens" component={WomensPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
