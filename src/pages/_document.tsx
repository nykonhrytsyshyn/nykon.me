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
          "min-h-screen font-sans antialiased bg-[#f5f5f5] dark:bg-[#0c0c0c]",
          fontSans.variable,
        )}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
