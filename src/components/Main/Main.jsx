import React, { Component } from "react";
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import ToDoList from "./ToDoList/ToDoList";
import Home from "./Home"
import Weather from "./Weather"
import NotFound from "./NotFound"

class Main extends Component {
  render() {
    return <main>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/todo" element={<ToDoList />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
    </main>;
  }
}

export default Main;
