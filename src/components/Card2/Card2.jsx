import React from "react";
import poster1 from "../../assets/Poster1.svg";
import bingo2 from "../../assets/bingo2.svg";
// import bingoborder2 from "../../assets/bingo-border-left.svg";
import "./Card2.css";

const Card2 = () => {
  return (
    <>
      <div className="Left-Card">
        <div className="product-info">
          <div className="bingo-box">
            <img src={bingo2} alt="bingo2" srcset="" className="bingo2" />
          </div>
          <div className="product-info-content">
            <h3>
              <span>Awesome</span> T-Shirts{" "}
            </h3>
            <p> premium quality t-shirts to keep you grooving </p>
          </div>
        </div>
        <div className="product-img">
          <div className="button-card">
            <button type="button">Shop Posters</button>
          </div>
          <img src={poster1} alt="poster1" srcset="" className="poster1" />
        </div>
      </div>
    </>
  );
};

export default Card2;
