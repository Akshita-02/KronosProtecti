import React from "react";
import Roadmap from "../Components/Roadmap";
import "./Home.css";
import VideoSec from "../Components/videoSec/VideoSec";
import Hero from "../Components/Hero/Hero";
const Home = () => {
  return (
    <>
      <div className="home-container-section">
      <Hero />
      </div>
      
      <div className="expreince">
        <img src="../image/expr.png" alt="" className="secImg" />
      </div>
      <Roadmap />
      <VideoSec />
    </>
  );
};

export default Home;
