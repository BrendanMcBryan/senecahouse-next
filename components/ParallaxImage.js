import React from "react";

function ParallaxImage(props) {
  return (
    <div
      className="parallax_image"
      style={{ height: props.height, backgroundImage: `url("${props.image}")` }}
    ></div>
  );
}

export default ParallaxImage;
