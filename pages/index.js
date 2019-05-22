import { useEffect } from "react";
import { register, unregister } from "next-offline/runtime";
import Head from "next/head";
import ReactMarkdown from "react-markdown";

import "./styles.css";

const input = require("../README.md").default;

export default () => {
  useEffect(() => {
    register();
    return () => {
      unregister();
    };
  });

  return (
    <>
      <Head>
        <title>Harun Memiş</title>
      </Head>
      <div className="container">
        <ReactMarkdown source={input} />
      </div>
    </>
  );
};
