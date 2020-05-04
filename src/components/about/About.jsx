import React from "react";
import Img from "../../img/no_img_works.jpg";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="row">
        <div className="links">
          <a
            className="nav-link-custom"
            href="https://www.instagram.com/matviets_vladimir_artist/">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <div className="about-img col">
          <img src={Img} alt="" />
          <h6 className="works-text">
            Sorry. This content is currently unavailable
          </h6>
        </div>
      </div>
    </>
  );
};

export default About;
