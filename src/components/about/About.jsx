import React from "react";
import Img from "../../img/no_img_works.jpg";
import "./About.css";
import Links from "./../links/Links";

const About = () => {
  return (
    <>
      <div className="container-custom">
        <h4 className="header">MATVIETS VLADIMIR</h4>
        <div className="row">
          <div className="links">
            <Links></Links>
          </div>
          <a
            className="nav-link-custom"
            href="https://www.instagram.com/matviets.vladimir.artist/">
            <i className="fab fa-instagram"></i>
          </a>
          <div className="about-img col">
            <img src={Img} alt="" />
            <h6 className="works-text">
              Sorry. This content is currently unavailable
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
