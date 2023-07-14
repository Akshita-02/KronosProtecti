import React, { useEffect } from "react";
import "./RoadMap.css";
const Roadmap = () => {
  useEffect(() => {
    const canvas = document.getElementById("mycanvas");
    const ctx = canvas.getContext("2d");
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(100, 50);
    ctx.lineTo(1100, 50);
    ctx.strokeStyle = "#87CEEB";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.arc(1100, 150, 100, 1.5 * Math.PI, 0.5 * Math.PI);
    ctx.lineTo(200, 250);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(200, 450);
    ctx.arc(200, 350, 100, -1.5 * Math.PI, -0.5 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(200, 450);
    ctx.lineTo(1200, 450);
    ctx.stroke();
  }, []);
  return (
    <>
      <div className="services">
        <h1>
          How We Provide <span>Our Services </span>
        </h1>
        <p>
          Providing security services involves a range of activities aimed at
          protecting people, prperty,{" "}
        </p>{" "}
        <p>
          and assests from potential threatss. Here are some general steps to
          consider when providing securrity services:
        </p>
      </div>

      <div className="container">
        <canvas
          id="mycanvas"
          width="1200"
          height="700"
          style={{ color: "blueviolet" }}
        ></canvas>
      </div>

      <div className="roadmap-content">
        <div className="ct1 ctm">
          <img
            src="../../image/Screenshot 2023-07-14 133917.png"
            alt=""
          />
          <p> Asseess client need</p>
        </div>
        <div className="ct1 ctm">
          <img
            src="../../image/2.png"
            alt=""
          />
          <p> develop a security plan</p>
        </div>
        <div className="ct2 ctm">
          <img
            src="../../image/3.png"
            alt=""
          />
          <p> Hire and train security personal</p>
        </div>
        <div className="ct3 ctm">
          <img
            src="../../image/4.png"
            alt=""
          />
          <p> Emergency response planing</p>
        </div>
      </div>
      <div className="ct-sec-2">
        <div className="ct4 ctm">
          <img
            src="../../image/6.png"
            alt=""
          />
          <p> Impliment security</p>
        </div>
        <div className="ct4 ctm">
          <img
            src="../../image/7.png"
            alt=""
          />
          <p> Monitoring and surveillance</p>
        </div>
        <div className="ct4 ctm">
          <img
            src="../../image/8.png"
            alt=""
          />
          <p> Maintain through records of all security incidents</p>
        </div>
      </div>
      <div className="ct-sec-3">
        <div className="ct6 ctm">
          <img
            src="../../image/9.png"
            alt=""
          />
          <p>Contact regular reviews of the security plan</p>
        </div>
        <div className="ct6 ctm">
          <img
            src="../../image/10.png"
            alt=""
          />
          <p> Continous training and development</p>
        </div>
        <div className="ct6 ctm">
          <img
            src="../../image/5.png"
            alt=""
          />
          <p> Monitoring and surveillance</p>
        </div>
      </div>
    </>
  );
};

export default Roadmap;
