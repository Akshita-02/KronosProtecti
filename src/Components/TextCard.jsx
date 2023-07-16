import React from "react";
import ImageContainer from "./ImageContainer";


const TextCard = ({ orientation, src, text }) => {
  return (
    <div className={`flex ${orientation} h-fit my-4 gap-6 `}>
      <ImageContainer src={src} className="h-[30rem] w-[50%]" />
      <article className="md:w-[50%] w-full px-2 h-100% "> {text}
  
      </article>
    </div>
  );
};

export default TextCard;
