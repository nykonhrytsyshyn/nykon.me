import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";
import clsx from "clsx";
import { fontSans } from "@configs/fonts";

export default class AppDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body
          className={clsx(
            "min-h-screen font-sans antialiased",
            fontSans.variable,
          )}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
