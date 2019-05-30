import React from "react";

const Link = props => <a {...props} />;

Link.defaultProps = {
  target: "_blank",
  rel: "noopener noreferrer"
};

export default Link;
