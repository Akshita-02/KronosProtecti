import React from "react";
import Roadmap from "../../Components/Roadmap";
import "./Home.css";
import VideoSec from "../../Components/videoSec/VideoSec";
import Footer from "../../Components/Footer/Footer";

import Cta from "../../Components/Cta";
const Home = () => {
  return (
    <>
      <Cta />
      <div className="expreince">
        <img src="../image/expr.png" alt="" className="secImg" />
      </div>
      <Roadmap />
      <VideoSec />
      <Footer />
    </>
  );
};

export default Home;
