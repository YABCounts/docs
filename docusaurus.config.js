// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "YAB ?! Counts",
  tagline: "Reimagining the concept of live counters.",
  favicon: "https://yabcounts.com/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.yabcounts.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "YABCounts", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "docusaurus-preset-openapi",
      /** @type {import('docusaurus-preset-openapi').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        api: {
          path: "spec.yaml",
          routeBasePath: "/api",
        },
      }),
    ],
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        indexPages: true,
        indexDocs: true,
        indexBlog: false,
        searchBarShortcutHint: false,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "https://yabcounts.com/logo.png",
      navbar: {
        title: "YAB ?! COUNTS",
        logo: {
          alt: "YAB ?! Counts Logo",
          src: "https://yabcounts.com/logo.png",
          href: "https://yabcounts.com",
          width: 40,
          height: 40,
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "right",
            label: "Tutorial",
          },
          {
            to: "/api",
            label: "API",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/",
              },
              {
                label: "API",
                to: "/api",
              },
            ],
          },
          {
            title: "Socials",
            items: [
              {
                label: "YouTube",
                href: "https://youtube.com/@YABCounts",
              },
              {
                label: "Instagram",
                href: "https://instagram.com/YABCounts",
              },
              {
                label: "X",
                href: "https://twitter.com/YABCounts",
              },
              {
                label: "Discord",
                href: "https://yabcounts.com/discord",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Website",
                to: "https://yabcounts.com",
              },
              {
                label: "Blog",
                to: "https://yabcounts.com/blog",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} YAB ?! Counts. All rights reserved.`,
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      metadata: [
        {
          name: "og:site_name",
          content: "YAB ?! Counts",
        },
        {
          name: "twitter:card",
          content: "summary",
        },
        {
          name: "theme-color",
          content: "#a855f7",
        },
      ],
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
