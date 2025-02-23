import { Html, Head, Main, NextScript } from "next/document";
import clsx from "clsx";
import { fontSans } from "@configs/fonts";
import { ReactElement } from "react";
import Script from "next/script";

export default function Document(): ReactElement {
  return (
    <Html suppressHydrationWarning lang="en">
      <Head />
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
