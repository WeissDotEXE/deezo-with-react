import React, { useState } from "react";
import styles from './App.module.scss';
import Navbar from "./components/Navbar/Navbar";
import Cards from "./components/Cards/Cards";
import Profile from "./components/Profile/Profile";
import Home from "./components/Home/Home";
import IntroPage from "./components/Intro/IntroPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {

  return (
    <Router>
      <div className={styles.App}>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cards" exact component={Cards} />
          <Route path="/profile" exact component={Profile} />
        </Switch>
      </div>

      {/* div for telling user that website is not avalaible for mobile screens (tablets included) */}
      <div className={styles.mobileError}>
        <i class="fas fa-sad-tear"></i>
        <h1>I am sorry!</h1>
        <h1>This website is not avalaible for this resolution yet.</h1>
      </div>
    </Router>
  );
};

export default App;
