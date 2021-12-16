import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from "./components/pages/homepage/HomePage";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);

function App() {
  return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route  exact path='/hats' component={HatsPage} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;