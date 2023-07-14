import React from "react";
import Roadmap from "../../Components/Roadmap";
import "./Home.css";


import Cta from "../../Components/Cta";
const Home = () => {
 
  return (
    <>
    <Cta/>

      <div className="expreince">
        <img src="../image/expr.png" alt="" className="secImg" />
      </div>
      <Roadmap />
    </>
  );
};

export default Home;
