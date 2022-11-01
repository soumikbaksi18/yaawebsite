import React from "react";
import "./style.css";
import Hamburger from "../../assets/Menu.svg";
import Logo from "../../assets/Logo.svg";
import Cart from "../../assets/Cart.svg";

const Navbar = () => {
  return (
    <>
      {/* <nav>
        <div className="Hamburger">
          <img
            src={Hamburger}
            alt="Hamburger"
            srcset=""
            className="Hamburger"
          />
        </div>

        <div className="Logo">
          <img src={Logo} alt="Logo" srcset="" className="Logo" />
        </div>

        <div className="Cart">
          <img src={Cart} alt="Cart" srcset="" className="Cart" />
        </div>
      </nav> */}
      <nav role="navigation">
        <div className="Hamburger" id="menuToggle">
          <input type="checkbox" />

          <span></span>
          <span></span>
          <span></span>

          <ul id="menu">
            <a href="#">
              <li>Home</li>
            </a>
            <a href="#">
              <li>About</li>
            </a>
            <a href="#">
              <li>Info</li>
            </a>
            <a href="#">
              <li>Contact</li>
            </a>
            <a href="https://erikterwan.com/" target="_blank">
              <li>Show me more</li>
            </a>
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
