import { Html, Head, Main, NextScript } from "next/document";
import clsx from "clsx";
import { fontSans } from "@configs/fonts";
import React, { ReactElement } from "react";
import Script from "next/script";

export default function Document(): ReactElement {
  return (
    <Html suppressHydrationWarning lang="en">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
        try {
          if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }
        } catch (_) {}
      `,
          }}
        />
      </Head>
      <body
        className={clsx(
          "min-h-screen font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Script src="/script/theme.js" strategy="beforeInteractive" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
