import React from "react";
import Works from "./Works";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="nav flex-column">
      <Link className="nav-link active " href="#" alt="1">
        Home
      </Link>

      <li className="nav-item mb-2">
        <Link className="nav-link" href="#" alt="1">
          Works
        </Link>
      </li>
      <li className="nav-item mb-2">
        <Link className="nav-link" href="#" alt="1">
          About
        </Link>
      </li>
      <li className="nav-item mb-2">
        <Link className="nav-link" href="#" alt="1">
          Exhibition
        </Link>
      </li>
      <li className="nav-item mb-2">
        <Link className="nav-link" href="#" alt="1">
          Store
        </Link>
      </li>
      <li className="nav-item mb-2">
        <Link className="nav-link" href="#" alt="1">
          Contact
        </Link>
      </li>
      <li className="nav-item mb-2">
        <Link className="nav-link" href="#">
          <i class="fab fa-instagram"></i>
        </Link>
      </li>
    </div>
  );
};

export default Menu;
