import React, { Component } from "react";

class Card extends Component {
  constructor (props) {
    super(props)

    this.state = {
      cards: this.props.cards
    }
  }

  render() {
    return (
    <article className="itemCard">
      <p>Weather</p>
      <p>{this.props.cards.name}</p>
  </article>)
  }
}

export default Card;
