import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="nav flex-column">
      <Link className="nav-link-custom active " to="/" href="#" alt="1">
        Home
      </Link>

      <Link className="nav-link-custom" to="/works" href="#" alt="1">
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
      <Link className="nav-link-custom" href="#">
        <i class="fab fa-instagram"></i>
      </Link>
    </div>
  );
};

export default Menu;
