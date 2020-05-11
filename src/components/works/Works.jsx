import React, { Component } from "react";
import "./Works.css";
import Gallery from "../gallery/Gallery";
import Links from "./../links/Links";
import Header from "./../header/Header";

class Works extends Component {
  state = {
    images: [
      { id: 1, src: require("../../img/no_img.jpg") },
      { id: 2, src: require("../../img/no_img.jpg") },
      { id: 3, src: require("../../img/no_img.jpg") },
      { id: 4, src: require("../../img/no_img.jpg") },
      { id: 5, src: require("../../img/no_img.jpg") },
      { id: 6, src: require("../../img/no_img.jpg") },
    ],
  };
  render() {
    return (
      <>
        <div className="container">
          <Header></Header>
          <div className="row">
            <Links />
            <div className="col-2 flex-column"></div>
            <div className="col">
              <Gallery elements={this.state.images} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Works;
