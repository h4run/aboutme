import Head from "next/head";
import ReactMarkdown from "react-markdown";

import "./styles.css";

const input = require("../README.md").default;

export default () => (
  <>
    <Head>
      <title>Harun Memiş</title>
    </Head>
    <div className="container">
      <ReactMarkdown source={input} />
    </div>
  </>
);
