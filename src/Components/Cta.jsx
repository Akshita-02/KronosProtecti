import React from 'react'
import { Slider0 } from './slider';
import { useNavigate } from "react-router-dom";

const Cta = () => {
       const navigate = useNavigate();

       const handleContactClick = () => {
         navigate("/contact");
       };
  return (
    <div className="home-container-section">
      <Slider0 />
      <div className="home-content">
        <h1>
          <span> KRONOS </span> PROTECTION
        </h1>
        <hr />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, quam
          adipisci officiis ipsa enim dolorem quos aliquam facilis laudantium
          necessitatibus autem aliquid fuga repellendus assumenda dignissimos in
          ipsum. Ex, dolorum placeat deleniti at, ipsum non corrupti quaerat aut
          vel veritatis enim illum natus blanditiis ab magnam! Numquam, amet
          dolor quos quam ratione magni veritatis aliquam praesentium enim vero
          quod voluptates. Quod tempore itaque et eius, excepturi sunt quam,
          accusamus nesciunt aperiam consectetur distinctio possimus recusandae.
          Quam assumenda vel nesciunt delectus, explicabo aspernatur facere hic
          facilis repudiandae dicta, eos architecto, in unde voluptatum sapiente
          sed doloremque amet quia. Doloribus magnam sapiente cumque labore,
          fugiat tempore architecto. Optio non voluptatem atque, aperiam quam
          maiores nostrum cupiditate, ad reprehenderit tempora magni alias eos,
          quo minus ipsam distinctio autem voluptas sunt voluptate? Quo fugiat
          nostrum odit aut dolor inventore, fugit ipsam consectetur! Hic minus
          et doloribus ab saepe sequi nobis explicabo veniam ducimus possimus!
        </p>
        <button className="btn" onClick={handleContactClick}>
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default Cta