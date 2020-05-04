import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Links.css";

class Links extends Component {
  state = {
    menuItems: [
      { name: "Home", isActive: false, route: "/" },
      { name: "Works", isActive: true, route: "/works" },
      { name: "About", isActive: false, route: "/about" },
      { name: "Exhibition", isActive: false, route: "/exhibition" },
      { name: "Store", isActive: false, route: "/store" },
      { name: "Contact", isActive: false, route: "/contact" },
    ],
  };

  handleClick = name => {
    this.setState(state => {
      const menuItems = state.menuItems.map(item => ({
        ...item,
        isActive: item.name === name,
      }));

      return { menuItems };
    });
  };

  render() {
    console.log(this.state);
    const menu = this.state.menuItems.map(item => {
      const classes = `nav-link-custom${item.isActive ? " active" : ""}`;
      return (
        <Link
          onClick={() => this.handleClick(item.name)}
          className={classes}
          to={item.route}
          href="#"
          alt="1">
          {item.name}
        </Link>
      );
    });

    return <div className="nav flex-column">{menu}</div>;
  }
}

export default Links;
