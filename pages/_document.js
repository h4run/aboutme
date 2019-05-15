import Document, { Html, Head, Main, NextScript } from "next/document";

const baseURL = process.env.BACKEND_URL;

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="tr">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />

          <link
            rel="manifest"
            href={`${baseURL}/static/manifest.webmanifest`}
          />

          <meta name="theme-color" content="#FF5D47" />
          <link rel="shortcut icon" href={`${baseURL}/static/img/icon.png`} />
          <link
            rel="apple-touch-icon"
            href={`${baseURL}/static/img/icon.png`}
          />
          <meta name="apple-mobile-web-app-title" content="Harun Memiş" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="mobile-web-app-capable" content="yes" />

          <link
            href={`${baseURL}/static/fonts/stylesheet.css`}
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
