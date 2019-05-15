import Head from "next/head";

import ReactMarkdown from "react-markdown";

import "normalize.css";
import "./styles.css";

const input = require("../README.md").default;

const baseURL = process.env.BACKEND_URL;

const title = "Harun Memiş";

export default () => (
  <>
    <Head>
      <title>{title}</title>

      <meta name="description" content="Kişisel web sitesi" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <link rel="manifest" href={`${baseURL}/static/manifest.webmanifest`} />

      <meta name="theme-color" content="#ff7e6d" />
      <link rel="shortcut icon" href={`${baseURL}/static/img/icon.png`} />
      <link rel="apple-touch-icon" href={`${baseURL}/static/img/icon.png`} />
      <meta name="apple-mobile-web-app-title" content={title} />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="mobile-web-app-capable" content="yes" />

      <link href={`${baseURL}/static/fonts/stylesheet.css`} rel="stylesheet" />
    </Head>
    <div className="container">
      <ReactMarkdown source={input} />
    </div>
  </>
);
