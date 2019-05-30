import Head from "next/head";
import ReactMarkdown from "react-markdown";
import { withAmp } from "next/amp";

import Image from "../components/Image";
import Link from "../components/Link";

import styles from "../styles";
import fonts from "../styles/fonts";

const input = require("../README.md").default;

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Harun Memiş</title>
      </Head>
      <div className="container">
        <ReactMarkdown
          renderers={{ image: Image, link: Link }}
          source={input}
          escapeHtml={false}
        />
      </div>
      <style jsx>{styles}</style>
      <style jsx>{fonts}</style>
    </>
  );
};

export default withAmp(HomePage);
