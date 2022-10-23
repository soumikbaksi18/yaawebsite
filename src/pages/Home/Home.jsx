import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import circle from "../../assets/Ellipse 5.svg"
import Shirt1 from "../../assets/Shirt1.svg"
const Home = () => {
  return (
    <>
    <Navbar />
    
    <div className="hero">

      <div className="Herotext">
        <h1>The <br/> <span>You Are Awesome </span>  Store</h1>
        <h3>For all the groove you need</h3>
        <button type="button"> Shop Now  </button>
      </div>


      <div className="Heroimages"> 
      <img src={circle} alt="circle" srcset="" className="circle"/>
      <img src={Shirt1} alt="Shirt1" srcset="" className="Shirt1"/>

      </div>



    </div>

    </>
  )
}

export default Home