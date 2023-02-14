import React, { Component } from "react";
import './ToDoItem.css'


class ToDoItem extends Component {
  constructor(props){
    super(props)
    this.state = {
      item: this.props.data
    }
  }
  render() {
    return (<article className="itemCard">
      <p>{this.props.data.name}</p>
      <button onClick={this.props.remove}>BORRAR</button>
    </article>)
  }
}

export default ToDoItem;
