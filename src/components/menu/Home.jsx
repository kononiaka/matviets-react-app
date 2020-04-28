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

        <a
          className="nav-link-custom"
          href="https://www.instagram.com/matviets.vladimir.artist/">
          <i className="home fab fa-instagram"></i>
        </a>
      </div>
    </>
  );
};

export default Home;
