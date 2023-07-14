import React from "react";

const ImageContainer = ({ height, className, src }) => {
  return (
    <picture
      style={{ "--image-url": `url(${src})` }}
      className={`${className} md:block hidden bg-cover rounded-3xl bg-center bg-[image:var(--image-url)]`}
    ></picture>
  );
};

export default ImageContainer;
