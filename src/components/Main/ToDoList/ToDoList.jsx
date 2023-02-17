import React, { Component } from "react";
import ToDoItem from "./ToDoItem";
import data from './todos.json';
import './ToDoList.css'



class ToDoList extends Component {
  constructor(props){
    super(props)

    this.state = {
      items: data
    }
  }

  deleteItem = (i) =>{
    const remainingItems = this.state.items.filter((item, j) => i !== j);
    this.setState({items: remainingItems})
  }

  deleteAll = () => {
    this.setState({ items: [] });
  }

  reset = () => {
    this.setState({ items: data })
  }

  printItems = () =>
    <section className="list">
      {this.state.items.map((item, i) => <ToDoItem data={item} remove={() => this.deleteItem(i)} key={Math.random()} />)}
    </section>


  handleSubmit = (event) => {
    event.preventDefault();
    const itemName = event.target.name.value;

    const newItem = {name: itemName};

    console.log(newItem)

    this.setState({ items: [newItem, ...this.state.items]});

    event.target.reset();

  }

  render() {
    return <section>
      <article>
        <h2>Add Item</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">New Item: </label>
          <input type="text" id="name" placeholder="insert text..."/>
          <input type="submit" value="ADD" />
        </form>
      </article>
      <br />
        {this.printItems()}


      <br />

      <article className="buttons">
        <button onClick={this.deleteAll}>DELETE ALL</button>
        <button onClick={this.reset}>RESET</button>
      </article>
      <br />

    </section>
  }
}

export default ToDoList;
