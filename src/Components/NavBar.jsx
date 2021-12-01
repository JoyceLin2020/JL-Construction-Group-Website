import React from "react";
import { NavLink, BrowserRouter } from "react-router-dom";
import "../style/NavBar.scss";
import logo from "../images/JL-Construction-Logo.png";

const CLASS_NAME = "Navigation";

function NavBar() {
  return (
    <div className={CLASS_NAME}>
      <NavLink to="/" className={`${CLASS_NAME}__logo`} exact>
        <img src={logo} alt="logo" width={231} height={90} />
      </NavLink>
      <div className={`${CLASS_NAME}__menu`}>
        <NavLink
          to="/"
          className={`${CLASS_NAME}__menu-entry`}
          activeClassName={`${CLASS_NAME}__menu-entry-active`}
          exact
        >
          Home
        </NavLink>
        <NavLink
          to="/about-us"
          className={`${CLASS_NAME}__menu-entry`}
          activeClassName={`${CLASS_NAME}__menu-entry-active`}
          exact
        >
          About Us
        </NavLink>
        <NavLink
          to="/our-projects"
          className={`${CLASS_NAME}__menu-entry`}
          activeClassName={`${CLASS_NAME}__menu-entry-active`}
          exact
        >
          Our Projects
        </NavLink>
        <NavLink
          to="/contact-us"
          className={`${CLASS_NAME}__menu-entry`}
          activeClassName={`${CLASS_NAME}__menu-entry-active`}
          exact
        >
          Contact Us
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
