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

  async componentDidMount() {
    //Petición HTTP
    // fetch('https://pokeapi.co/api/v2/pokemon')
    //     .then(resp => resp.json())
    //     .then(data => data)
    const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=madrid&units=metric&appid=cf8e1e70e4f8c11bf22baeed803614a6`);
    const data = await resp.json();
    this.setState({
      cards: data.results
    })
    console.log('componentDidMount');
  }

  print = () => {
    return (
    <section className="list">
      {this.state.cards.map((card) => <Card card={card}  key={Math.random()}/>)}
    </section>
    )
  }

  render() {
    return <div>
      <h1>Check the Weather</h1>
      {this.print()}
    </div>
  }
}

export default Weather;