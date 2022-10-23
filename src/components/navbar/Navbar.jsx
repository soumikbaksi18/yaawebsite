import React from 'react'
import "./style.css";
import Hamburger from "../../assets/Menu.svg"
import Logo from "../../assets/Logo.svg"
import Cart from "../../assets/Cart.svg"

const Navbar = () => {
  return (
    <>
    <nav>

      <div className="Hamburger">
      <img src={Hamburger} alt="Hamburger" srcset="" className="Hamburger"/>
      </div>

      <div className="Logo">
      <img src={Logo} alt="Logo" srcset="" className="Logo"/>
      </div>

      <div className="Cart">
      <img src={Cart} alt="Cart" srcset="" className="Cart"/>
      </div>

    </nav>
   
    </>
  )
}

export default Navbar