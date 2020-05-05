import React from "react";
import Img from "../../img/no_img_works.jpg";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="col-2"></div>
      <div className="about-img col">
        <img src={Img} alt="" />
        <h6 className="works-text">
          Sorry. This content is currently unavailable
        </h6>
      </div>
    </>
  );
};

export default About;
