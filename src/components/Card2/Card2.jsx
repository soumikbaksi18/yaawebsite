import React from "react";
import poster2 from "../../assets/Poster2.svg";
import bingo2 from "../../assets/bingo2.svg";
import './Card2.css'

const Card2 = () => {
  return (
    <>
      <div className="Left-Card">

        <img src={bingo2} alt="bingo2" srcset="" className="bingo2" />

        <div className="productinfo2" >
          <h2> A case of Awesomeness</h2>
          <h4> your phone cases should not miss out on the groove. treat it with our newest hard-plastic cases.</h4>
          <button type="button">Shop Cases</button>
       </div>


       <img src={poster2} alt="poster2" srcset="" className="poster2"/>
        
       

      </div>
    </>
  );
};

export default Card2;
