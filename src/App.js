import React, { Component } from "react";
import "./App.css";
import Home from "./components/home/Home";
import "./fonts/fonts.css";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Switch } from "react-router";
import Works from "./components/works/Works";
import About from "./components/about/About";
import Exhibition from "./components/exhibition/Exhibition";
import Store from "./components/store/Store.jsx";
import Contacts from "./components/contacts/Contacts";
class App extends Component {
  state = {
    images: [
      { id: 1, src: require("./img/no_img.jpg") },
      { id: 2, src: require("./img/no_img.jpg") },
      { id: 3, src: require("./img/no_img.jpg") },
      { id: 4, src: require("./img/no_img.jpg") },
      { id: 5, src: require("./img/no_img.jpg") },
      { id: 6, src: require("./img/no_img.jpg") },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <div className="content">
          <Switch>
            <Route path="/contact" component={Contacts}></Route>
            <Route path="/store" component={Store}></Route>
            <Route path="/exhibition" component={Exhibition}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/works" component={Works}></Route>
            <Route path="/" component={Home}></Route>
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
