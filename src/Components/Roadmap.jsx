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
          How We Provide <span>Our Services</span>
        </h1>
        <p>
          Providing security services involves a range of activities aimed at
          protecting people, property,
        </p>
        <p>
          and assets from potential threats. Here are some general steps to
          consider when providing security services:
        </p>
      </div>

      <div className="container">
        <canvas
          id="mycanvas"
          width="1200"
          height="700"
          style={{ color: "blueviolet" }}
        ></canvas>

        
          <div className="roadmap-content">
            <div className="ct1 ctm">
              <figure>
                <img
                  src="../../image/Screenshot 2023-07-14 133917.png"
                  alt=""
                />
                <figcaption>Assess client need</figcaption>
              </figure>
            </div>
            <div className="ct2 ctm">
              <figure>
                <img src="../../image/2.png" alt="" />
                <figcaption>Develop a security plan</figcaption>
              </figure>
            </div>
            <div className="ct3 ctm">
              <figure>
                <img src="../../image/3.png" alt="" />
                <figcaption>Hire and train security personnel</figcaption>
              </figure>
            </div>
            <div className="ct4 ctm">
              <figure>
                <img src="../../image/4.png" alt="" />
                <figcaption>Emergency response planning</figcaption>
              </figure>
            </div>
          </div>

          <div className="ct-sec-2">
            <div className="ct5 ctm">
              <figure>
                <img src="../../image/6.png" alt="" />
                <figcaption className="cap6">Implement security</figcaption>
              </figure>
            </div>
            <div className="ct6 ctm">
              <figure>
                <img src="../../image/7.png" alt="" />
                <figcaption className="cap6">
                  Monitoring and surveillance
                </figcaption>
              </figure>
            </div>
            <div className="ct7 ctm">
              <figure>
                <img src="../../image/8.png" alt="" />
                <figcaption className="cap6">
                  Maintain thorough records of all security incidents
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="ct-sec-3">
            <div className="ct8 ctm">
              <figure>
                <img src="../../image/9.png" alt="" />
                <figcaption className="cap7">
                  Conduct regular reviews of the security plan
                </figcaption>
              </figure>
            </div>
            <div className="ct9 ctm">
              <figure>
                <img src="../../image/10.png" alt="" />
                <figcaption className="cap7">
                  Continuous training and development
                </figcaption>
              </figure>
            </div>
            <div className="ct10 ctm">
              <figure>
                <img src="../../image/5.png" alt="" />
                <figcaption className="cap7">
                  Monitoring and surveillance
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
        <div className="phone">
           <div className="ctm">
              <figure>
                <img
                  src="../../image/Screenshot 2023-07-14 133917.png"
                  alt=""
                />
                <figcaption>Assess client need</figcaption>
              </figure>
            </div>
            <div className="ctm">
              <figure>
                <img src="../../image/2.png" alt="" />
                <figcaption>
                  Monitoring and surveillance
                </figcaption>
              </figure>
            </div>
            <div className="ctm">
              <figure>
                <img src="../../image/3.png" alt="" />
                <figcaption>
                  Monitoring and surveillance
                </figcaption>
              </figure>
            </div>
            <div className="ctm">
              <figure>
                <img src="../../image/4.png" alt="" />
                <figcaption>
                  Monitoring and surveillance
                </figcaption>
              </figure>
            </div>
            <div className="ctm">
              <figure>
                <img src="../../image/5.png" alt="" />
                <figcaption>
                  Monitoring and surveillance
                </figcaption>
              </figure>
            </div>
            <div className="ctm">
              <figure>
                <img src="../../image/6.png" alt="" />
                <figcaption>
                  Monitoring and surveillance
                </figcaption>
              </figure>
            </div>
            <div className="ctm">
              <figure>
                <img src="../../image/7.png" alt="" />
                <figcaption>
                  Monitoring and surveillance
                </figcaption>
              </figure>
            </div>
            <div className="ctm">
              <figure>
                <img src="../../image/8.png" alt="" />
                <figcaption>
                  Monitoring and surveillance
                </figcaption>
              </figure>
            </div>
            <div className="ctm">
              <figure>
                <img src="../../image/9.png" alt="" />
                <figcaption>
                  Monitoring and surveillance
                </figcaption>
              </figure>
            </div>
            <div className="ctm">
              <figure>
                <img src="../../image/10.png" alt="" />
                <figcaption>
                  Monitoring and surveillance
                </figcaption>
              </figure>
            </div>
      </div>
    </>
  );
};

export default Roadmap;
