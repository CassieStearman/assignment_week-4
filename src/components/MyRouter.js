import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";
  
  export default function MyRouter() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={TaskManager} />
          <Route path="/about" component={TaskList} />
        </Switch>
      </Router>
    );
  }
  
  function Navbar() {
    return (
      <nav>
        <NavLink
          activeStyle={{
            fontWeight: "bold",
            color: "red"
          }}
          to="/"
        >
          Task Manager
        </NavLink>
        <NavLink activeClassName="active" to="/Task List">
          Task List
        </NavLink>
      </nav>
    );
  }