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

          <link rel="manifest" href="/manifest.webmanifest" />

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

          <meta name="yandex-verification" content="57ebe70b831718c0" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
          />
          <script
            async
            custom-element="amp-analytics"
            src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"
          />
          <script
            async
            custom-element="amp-install-serviceworker"
            src="https://cdn.ampproject.org/v0/amp-install-serviceworker-0.1.js"
          />
        </Head>
        <body>
          <amp-analytics
            config="https://www.googletagmanager.com/amp.json?id=GTM-58DD3FJ&gtm.url=SOURCE_URL"
            data-credentials="include"
          />
          <amp-analytics type="metrika">
            <script
              type="application/json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  vars: {
                    counterId: "54033100",
                    clickmap: true,
                    trackLinks: true,
                    accurateTrackBounce: true,
                    webvisor: true
                  }
                })
              }}
            />
          </amp-analytics>
          <amp-install-serviceworker
            src="/sw.js"
            data-iframe-src="/sw.html"
            layout="nodisplay"
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
