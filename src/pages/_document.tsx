import { Html, Head, Main, NextScript } from "next/document";
import clsx from "clsx";
import { fontSans } from "@configs/fonts";
import { ReactElement } from "react";

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
        <script src="/script/noflash.js" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
