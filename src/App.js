import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/pages/homepage/HomePage";
import ShopPage from "./components/pages/shop/Shop";
import Header from "./components/header/Header";
import SignInAndSignUpPage from "./components/pages/SignInAndSignUp/SignInAndSignUp";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
