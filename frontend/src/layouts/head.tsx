import React, { ReactElement } from "react";
import NextHead from "next/head";
import { siteConfig } from "@configs/site";

/**
 * Default head component that injects elements to `<head>` of the page.
 *
 * @constructor
 */
export default function Head(): ReactElement {
  return (
    <NextHead>
      <title>{siteConfig.name}</title>
      <meta key="title" content={siteConfig.name} property="og:title" />
      <meta content={siteConfig.description} property="og:description" />
      <meta content={siteConfig.description} name="description" />
      <meta
        key="viewport"
        content="viewport-fit=cover, width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        name="viewport"
      />
      <meta
        content="#f5f5f5"
        media="(prefers-color-scheme: light)"
        name="theme-color"
      />
      <meta
        content="#0c0c0c"
        media="(prefers-color-scheme: dark)"
        name="theme-color"
      />
      <link href="/favicon.ico" rel="icon" />
    </NextHead>
  );
}
