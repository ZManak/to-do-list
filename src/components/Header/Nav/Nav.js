import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return <nav>
      <Link to="/todo">To Do List</Link>
      <Link to="/weather">Check the Weather</Link>
      <Link to="/">Home</Link>
    </nav>;
  }
}

export default Nav;