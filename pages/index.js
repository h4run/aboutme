import Head from "next/head";
import ReactMarkdown from "react-markdown";
import { withAmp, useAmp } from "next/amp";

import Image from "../components/Image";
import Link from "../components/Link";

// styles
import "./styles.css";

const input = require("../README.md").default;

const HomePage = () => {
  const isAmp = useAmp();
  return (
    <>
      <Head>
        <title>Harun Memiş</title>
        {!isAmp && (
          <link href="/static/fonts/stylesheet.css" rel="stylesheet" />
        )}
      </Head>
      <div className="container">
        <ReactMarkdown
          renderers={{ image: Image, link: Link }}
          source={input}
          escapeHtml={false}
        />
      </div>
    </>
  );
};

export default withAmp(HomePage, { hybrid: true });
