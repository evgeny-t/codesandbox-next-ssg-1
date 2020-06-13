import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

function f() {
  console.log(43);
}

const id = 1000;

export default class extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        head: [...initialProps.head],
        // @ts-ignore
        styles: [...initialProps.styles, ...sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html>
        <Head>
          <meta property="og:title" content="Static Fun" />
          <meta
            property="og:description"
            content="claim any subdomain and have fun!"
          />
          <meta
            property="og:image"
            content="https://www.static.fun/static/twitter-card.png"
          />
          <meta property="og:url" content="https://www.static.fun" />
          <meta name="twitter:card" content="summary_large_image" />
          <script
            key="google.gtag"
            dangerouslySetInnerHTML={{ __html: `console.log('gtag')` }}
          />
          <noscript key="dupa">
            <div>
              <img
                src={`https://mc.yandex.ru/watch/${id}`}
                style={{ position: "absolute", left: -9999 }}
                alt=""
              />
            </div>
          </noscript>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
