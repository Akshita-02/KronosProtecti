import React from "react";
import Roadmap from '../Components/Roadmap'
import "./Home.css";
import ImageSlider, { Slide } from "react-auto-image-slider";
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
const Home = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };
  return (
    <>
      <Header />
      <div className="home-container-section">
        <div className="slider-section">
          <ImageSlider
            effectDelay={500}
            autoPlayDelay={3000}
            className="slider-container"
          >
            <Slide>
              <img
                alt="img2"
                src="https://images.unsplash.com/photo-1614627264058-f3e35e86d424?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
              />
            </Slide>
            <Slide>
              <img
                alt="img2"
                src="https://images.unsplash.com/photo-1523294557-3637e1db3f33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              />
            </Slide>
            <Slide>
              <img
                alt="img1"
                src="https://images.unsplash.com/photo-1485230405346-71acb9518d9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1794&q=80"
              />
            </Slide>
          </ImageSlider>
        </div>
        <div className="home-content">
          <h1>
            <span> KRONOS </span> PROTECTION
          </h1>
          <hr />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error,
            quam adipisci officiis ipsa enim dolorem quos aliquam facilis
            laudantium necessitatibus autem aliquid fuga repellendus assumenda
            dignissimos in ipsum. Ex, dolorum placeat deleniti at, ipsum non
            corrupti quaerat aut vel veritatis enim illum natus blanditiis ab
            magnam! Numquam, amet dolor quos quam ratione magni veritatis
            aliquam praesentium enim vero quod voluptates. Quod tempore itaque
            et eius, excepturi sunt quam, accusamus nesciunt aperiam consectetur
            distinctio possimus recusandae. Quam assumenda vel nesciunt
            delectus, explicabo aspernatur facere hic facilis repudiandae dicta,
            eos architecto, in unde voluptatum sapiente sed doloremque amet
            quia. Doloribus magnam sapiente cumque labore, fugiat tempore
            architecto. Optio non voluptatem atque, aperiam quam maiores nostrum
            cupiditate, ad reprehenderit tempora magni alias eos, quo minus
            ipsam distinctio autem voluptas sunt voluptate? Quo fugiat nostrum
            odit aut dolor inventore, fugit ipsam consectetur! Hic minus et
            doloribus ab saepe sequi nobis explicabo veniam ducimus possimus!
          </p>
          <button className="btn" onClick={handleContactClick}>
            Contact Us
          </button>
        </div>
      </div>

      <div className="expreince">
        <img src="../image/expr.png" alt="" className="secImg" />
      </div>
      <Roadmap />
      <Footer />
    </>
  );
};

export default Home;
