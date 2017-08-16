import Document, { Head, Main, NextScript } from 'next/document';

import React from 'react';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-ND3NJHL');` }}
        />
        <Head />
        <noscript>
          <iframe
            title="uniq"
            src="https://www.googletagmanager.com/ns.html?id=GTM-ND3NJHL"
            height="0"
            width="0"
            style={{
              display: 'none',
              visibility: 'hidden',
            }}
          />
        </noscript>
        <Main />
        <NextScript />
      </html>
    );
  }
}
