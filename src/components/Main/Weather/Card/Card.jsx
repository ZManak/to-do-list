import React, { Component } from "react";

class Card extends Component {
  constructor (props) {
    super(props)

    this.state = {
      card: this.props.cards
    }
  }
  render() {
    return (
    <article className="itemCard">
      <p>Hello</p>
      <p>{this.props.card}</p>
  </article>)
  }
}

export default Card;
