import React from "react";
import ImageContainer from "./ImageContainer";

const TextCard = ({ orientation, src, text }) => {
  return (
    <div className={`flex lg:flex-row flex-col justify-center ${orientation} h-fit my-4 gap-6 `}>
      <ImageContainer src={src} className="h-[25rem] md xl:h-[35rem] w-full lg:w-[55%]" />
      
      <article className="md:w-[45%] w-full px-2  md:h-full h-fit">
      
        {text}
      </article>
    </div>
  );
};

export default TextCard;
