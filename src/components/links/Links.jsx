import React from "react";
import { Link } from "react-router-dom";
import "./Links.css";

const Links = () => {
  return (
    <div className="nav flex-column">
      <Link className="nav-link-custom" to="/" href="#" alt="1">
        Home
      </Link>

      <Link className="nav-link-custom active" to="/works" href="#" alt="1">
        Works
      </Link>

      <Link className="nav-link-custom" to="/about" href="#" alt="1">
        About
      </Link>

      <Link className="nav-link-custom" to="/exhibition" href="#" alt="1">
        Exhibition
      </Link>

      <Link className="nav-link-custom" to="/store" href="#" alt="1">
        Store
      </Link>
      <Link className="nav-link-custom" to="/contact" href="#" alt="1">
        Contact
      </Link>
      <a
        className="nav-link-custom"
        href="https://www.instagram.com/matviets.vladimir.artist/">
        <i className="fab fa-instagram"></i>
      </a>
    </div>
  );
};

export default Links;
