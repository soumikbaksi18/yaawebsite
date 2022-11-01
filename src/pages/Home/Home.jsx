import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Card1 from "../../components/Card1/Card1";
import Card2 from "../../components/Card2/Card2";
import circle from "../../assets/Ellipse 5.svg";
import Shirt1 from "../../assets/Shirt1.svg";
import "./style.css";
const Home = () => {
  return (
    <>
      <Navbar />

      <div className="hero">
        <div className="Herotext">
          <h1>
            The <br /> <span>You Are Awesome </span> Store
          </h1>
          <h3>For all the groove you need</h3>
          <button type="button"> Shop Now </button>
        </div>
        <div className="Heroimages">
          <img src={circle} alt="circle" srcset="" className="circle" />

          <div className="animated-img">
            <img src={Shirt1} alt="Shirt1" srcset="" className="Shirt1" />
          </div>
        </div>
      </div>

      <Card1 />

      {/* <Card2 /> */}
    </>
  );
};

export default Home;
