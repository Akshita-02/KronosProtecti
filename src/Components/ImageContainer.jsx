import React from "react";

const ImageContainer = ({ height, className, src }) => {
  return (
    <picture
      style={{ "--image-url": `url(${src})` }}
      className={`${className}   rounded-3xl bg-cover  bg-center bg-[image:var(--image-url)]`}
    ></picture>
  );
};

export default ImageContainer;
