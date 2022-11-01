import React from "react";
import poster1 from "../../assets/Poster1.svg";
import bingo1 from "../../assets/bingo1.svg";
import "./Card1.css";

const Card1 = () => {
  return (
    <>
      <div className="Right-Card">
        <div className="product-img">
          <img src={poster1} alt="poster1" srcset="" className="poster1" />
          <div className="button-card">
            <button type="button">Shop Posters</button>
          </div>
        </div>

        <div className="product-info">
          <div className="bingo-box">
            <img src={bingo1} alt="bingo1" srcset="" className="bingo1" />
          </div>
          <div className="product-info-content">
            <h3>
              <span>Awesome</span> Posters{" "}
            </h3>
            <p> premium quality posters to keep your walls aesthetic </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card1;
