import React, { Component } from "react";
import Nav from "./Nav/Nav";
import './Header.css'

class Header extends Component {
  render() {
    return <header>
      <h1>THE AMAZING WEB</h1>
      <Nav/>
    </header>
  }
}

export default Header;
