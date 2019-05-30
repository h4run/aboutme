import React from "react";
import { useAmp } from "next/amp";

const sizes = {
  "app-store-badge": {
    width: "120",
    height: "40"
  },
  "google-play-store-badge": {
    width: "136",
    height: "41"
  }
};

const Image = props => {
  const hasSizeImage = Object.keys(sizes).find(s => props.src.match(s));
  let newProps = props;
  if (hasSizeImage) {
    const sizeProps = sizes[hasSizeImage];
    newProps = { ...props, ...sizeProps };
  }
  return <amp-img {...newProps} />;
};

export default Image;
