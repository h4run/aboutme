import Head from "next/head";
import ReactMarkdown from "react-markdown";
import { withAmp, useAmp } from "next/amp";

import Image from "../components/Image";

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
          linkTarget={() => "_blank"}
          renderers={{ image: Image }}
          source={input}
          escapeHtml={false}
        />
      </div>
    </>
  );
};

export default withAmp(HomePage, { hybrid: true });
