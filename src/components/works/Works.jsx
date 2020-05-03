import React, { Component } from "react";
import "./Works.css";
import Gallery from "../gallery/Gallery";
import Header from "../header/Header";
import Links from "../links/Links";

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
        <div className="container-custom">
          <Header></Header>
          <div className="row">
            <div className="links">
              <Links></Links>
            </div>

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
