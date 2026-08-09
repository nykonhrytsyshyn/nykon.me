export const siteConfig = {
  /* Basic Metadata */

  name: "Nykon Hrytsyshyn",
  shortName: "nykon.me",
  description:
    "Nykon Hrytsyshyn is a software & mechanical engineer. This is his personal website and portfolio, showcasing his projects, skills, and contact information.",
  canonical: "https://nykon.me",
  author: "Nykon Hrytsyshyn",
  image: "/assets/og-image.png",
  keywords: [
    "Nykon Hrytsyshyn",
    "nykon.me",
    "portfolio",
    "software engineer",
    "mechanical engineer",
  ],

  /* Social */

  twitter: "@nykonhrytsyshyn",
  sameAs: [
    "https://github.com/nykonhrytsyshyn/",
    "https://x.com/nykonhrytsyshyn",
    "https://telegram.me/nykonh_rytsyshyn",
    "https://youtube.com/c/Enchig",
    "https://instagram.com/nykon.hrytsyshyn",
    "https://linkedin.com/in/nykon",
    "https://reddit.com/u/TheDrMine/",
  ],

  /* PWA Manifest */

  pwa: {
    display: "standalone",
    backgroundColor: "#111111",
    themeColor: "#111111",
    startUrl: "/",
    scope: "/",
    icons: [
      {
        src: "/assets/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/assets/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },

  /* SEO & Robots */

  robots: {
    sitemapUrl: "https://nykon.me/sitemap-index.xml",
    contentSignals: {
      aiTrain: true,
      search: true,
      aiInput: true,
    },
    disallow: ["/_astro/", "/assets/", "/api/", "/email", "/telegram"],
  },

  /* Security (RFC 9116) */

  security: {
    contact: "mailto:security@nykon.me",
    expires: "2030-01-01T12:00:00Z",
    canonical: "https://nykon.me/.well-known/security.txt",
    policy: "https://github.com/nykonhrytsyshyn/nykon.me/security",
    preferredLanguages: ["en", "uk", "ru"],
  },
};

export type SiteConfig = typeof siteConfig;
