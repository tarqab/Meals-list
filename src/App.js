import { Component } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import "./App.css"

export default class App extends Component {

  state = {

  }
  render() {
    return <>
      <Navbar />
      <Home />
    </>
  }
}