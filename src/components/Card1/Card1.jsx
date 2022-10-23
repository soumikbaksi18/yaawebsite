import React from 'react'
import poster1 from "../../assets/Poster1.svg"
import bingo1 from "../../assets/bingo1.svg"
const Card1 = () => {
  return (
    <>
    <div className="Right-Card">

       <img src={poster1} alt="poster1" srcset="" className="poster1"/>

       <img src={bingo1} alt="bingo1" srcset="" className="bingo1"/>
       
       
       <div className="productinfo" >
          <h2> Awesome Posters </h2>
          <h4> premium quality posters to keep your walls aesthetic </h4>
          <button type="button">Shop Posters</button>
       </div>

       

       </div>


       </>

    
  )
}

export default Card1
