import React, { Component } from "react";
import Card from "./Card/Card";
import items from './items.json'

class Weather extends Component {
  constructor (props) {
    super(props);

    this.state = {
      cards: items
    }
    console.log("CONSTRUXC")
  } 
  
  print = () => {
    return (
    <section className="list">
      {this.state.cards.map((card) => <Card cards={card}  key={Math.random()}/>)}
    </section>
    )
  }

  render() {
    return <div>
      <h1>Hello</h1>
      {this.print()}
    </div>
  }
}

export default Weather;
