import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="main">
        <Link className="enter-site-btn" to="/works">
          Enter
        </Link>

        <Link
          className="nav-link-custom"
          to="https://www.facebook.com/vladimir.kononiaka"
          href="#">
          <i className="fab fa-instagram"></i>
        </Link>
      </div>
    </>
  );
};

export default Home;
