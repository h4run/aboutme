import Document, { Html, Head, Main, NextScript } from "next/document";
// import { useAmp } from "next/amp";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="tr">
        <Head>
          <meta name="description" content="Kişisel Web Sitesi" />

          <link rel="manifest" href="/static/manifest.webmanifest" />

          <meta name="theme-color" content="#FF5D47" />
          <link rel="shortcut icon" href="/static/img/icon.png" />
          <link rel="apple-touch-icon" href="/static/img/icon.png" />
          <meta name="apple-mobile-web-app-title" content="Harun Memiş" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="mobile-web-app-capable" content="yes" />

          <meta property="og:image" content="/static/img/og-image.png" />
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
