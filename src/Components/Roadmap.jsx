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
        <h3>
          How We Provide <span>Our Services </span>
        </h3>
        <p>
          Providing security services involves a range of activities aimed at
          protecting people, prperty, and assests from potential threatss. Here
          are some general steps to consider when providing securrity services:
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
      <div class="roadmap-container">
        <div class="roadmap-item">
          <img src="image1.jpg" alt="" />
          <p>Description 1</p>
        </div>
        <div class="roadmap-item">
          <img src="image2.jpg" alt="" />
          <p>Description 2</p>
        </div>
        {/* <!-- Add more roadmap items --> */}
      </div>
    </>
  );
};

export default Roadmap;
