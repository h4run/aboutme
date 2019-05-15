import Head from "next/head";

import ReactMarkdown from "react-markdown";

import "normalize.css";
import "./styles.css";

const input = require("../README.md").default;

export default () => (
  <>
    <Head>
      <title>Harun Memiş</title>
      <link
        href={`${process.env.BACKEND_URL}/static/fonts/stylesheet.css`}
        rel="stylesheet"
      />
    </Head>
    <div className="container">
      <ReactMarkdown source={input} />
    </div>
  </>
);
