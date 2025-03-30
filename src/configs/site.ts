// noinspection JSUnusedGlobalSymbols

import type { SiteConfig } from "@type/site";

/** Site configuration data. */
export const siteConfig: SiteConfig = {
  name: "Nykon Hrytsyshyn",
  description: "Personal website of Nykon Hrytsyshyn",
  navItems: [
    {
      link: {
        href: "/",
      },
      icon: "home",
      separation: {
        right: true,
      },
    },
    {
      label: "About",
      link: {
        href: "/about",
      },
      icon: "about",
    },
    {
      label: "Work",
      link: {
        href: "/work",
      },
      icon: "work",
    },
    {
      label: "Gallery",
      link: {
        href: "/gallery",
      },
      icon: "gallery",
    },
  ],
};

export default siteConfig;
