import React, { Component } from "react";
import "./App.css";
import Gallery from "./components/gallery";
import Menu from "./components/menu";
import Header from "./components/header";
import "./fonts/fonts.css";
import "bootstrap/dist/css/bootstrap.css";
class App extends Component {
  state = {
    images: [
      { src: require("./img/no_img.jpg") },
      { src: require("./img/no_img.jpg") },
      { src: require("./img/no_img.jpg") },
      { src: require("./img/no_img.jpg") },
      { src: require("./img/no_img.jpg") },
      { src: require("./img/no_img.jpg") }
    ]
  };
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Header></Header>
          <div className="row">
            <div className="col-3">
              <Menu> </Menu>
            </div>
            <div className="col-9">
              <Gallery elements={this.state.images} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
