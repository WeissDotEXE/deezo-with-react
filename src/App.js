import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Cards from "./components/Cards/Cards";
import Profile from "./components/Profile/Profile";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return(
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cards" exact component={Cards} />
          <Route path="/profile" exact component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
