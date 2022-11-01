import React from "react";
import "./style.css";
import Hamburger from "../../assets/Menu.svg";
import Logo from "../../assets/Logo.svg";
import Cart from "../../assets/Cart.svg";
import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav role="navigation">
        <div className="Hamburger" id="menuToggle">
          <input type="checkbox" />

          <span></span>
          <span></span>
          <span></span>

          <ul id="menu">
            <Link to="/" style={{ textDecoration: "none" }}>
              <p>Home</p>
            </Link>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <p>About </p>
            </Link>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <p>Contact</p>
            </Link>
            <Link to="./product-catalouge" style={{ textDecoration: "none" }}>
              <p>Product Catalouge</p>
            </Link>
          </ul>
        </div>
        <div className="Logo">
          <img src={Logo} alt="Logo" srcset="" className="Logo" />
        </div>
        <div className="Cart">
          <img src={Cart} alt="Cart" srcset="" className="Cart" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
