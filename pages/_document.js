import Document, { Html, Head, Main, NextScript } from "next/document";
// import { useAmp } from "next/amp";

import schemaOrg from "../schemaOrg.json";

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

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: `${JSON.stringify(schemaOrg)}` }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W69QKDF');`
            }}
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
