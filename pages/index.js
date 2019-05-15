import ReactMarkdown from "react-markdown";

import "normalize.css";
import "./styles.css";

const input = require("../README.md").default;

export default () => (
  <div className="container">
    <ReactMarkdown source={input} />
  </div>
);
