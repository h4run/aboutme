import React from "react";

const sizes = {
  "app-store-badge": {
    width: "120",
    height: "40"
  },
  "google-play-store-badge": {
    width: "136",
    height: "41"
  },
  "mobile-app": {
    width: "640",
    height: "640"
  },
  "app-icons": {
    width: "20",
    height: "20"
  }
};

const Image = props => {
  const { src } = props;
  const hasSizeImage = Object.keys(sizes).find(s => src.match(s));
  let newProps = props;
  if (hasSizeImage) {
    const sizeProps = sizes[hasSizeImage];
    newProps = {
      ...props,
      ...sizeProps,
      class: `${props.class} ${hasSizeImage}`
    };
  }
  if (!props.src.match("svg")) {
    newProps = {
      ...newProps,
      srcset: `${src} 1x, ${src.replace(".", "@2x.")} 2x`
    };
    if (props.src.match("mockups")) {
      newProps = {
        ...newProps,
        layout: "responsive"
      };
    }
  }

  return <amp-img {...newProps} />;
};

Image.defaultProps = {
  class: "img"
};

export default Image;
