const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
    module.exports = {
        title: "My Site",
        tagline: "Dinosaurs are cool",
        url: "https://your-docusaurus-test-site.com",
        baseUrl: "/",
        onBrokenLinks: "throw",
        onBrokenMarkdownLinks: "warn",
        favicon: "img/favicon.ico",
        organizationName: "Reved",
        projectName: "innercoretutor", // Usually your repo name.

        presets: [
            [
                "@docusaurus/preset-classic",
                /** @type {import('@docusaurus/preset-classic').Options} */
                ({
                    docs: {
                        sidebarPath: require.resolve("./sidebars.js"),
                        editUrl: "https://github.com/R3ved/InnerCoreTutor",
                    },
                    blog: {
                        showReadingTime: true,
                        editUrl: "https://github.com/R3ved/InnerCoreTutor",
                    },
                    theme: {
                        customCss: require.resolve("./src/css/custom.css"),
                    },
                }),
            ],
        ],

        themeConfig:
            /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
            ({
                navbar: {
                    title: "InnerCore Tutor",
                    logo: {
                        alt: "logo",
                        src: "img/logo.svg",
                    },
                    items: [
                        {
                            type: "doc",
                            docId: "intro",
                            position: "left",
                            label: "Hướng Dẫn",
                        },
                        { to: "/blog", label: "Blog", position: "left" },
                        {
                            href: "https://github.com/R3ved/InnerCoreTutor",
                            label: "GitHub",
                            position: "right",
                        },
                    ],
                },
                footer: {
                    style: "dark",
                    links: [
                        {
                            title: "Hướng dẫn",
                            items: [
                                {
                                    label: "Bắt đầu",
                                    to: "/docs/intro",
                                },
                            ],
                        },
                        {
                            title: "Cộng đồng",
                            items: [
                                {
                                    label: "Discord",
                                    href: "https://discordapp.com/invite/docusaurus",
                                },
                                {
                                    label: "Facebook",
                                    href: "https://twitter.com/docusaurus",
                                },
                            ],
                        },
                    ],
                    copyright: `Copyright © ${new Date().getFullYear()} InnerCoreTutor. Built with Docusaurus.`,
                },
                prism: {
                    theme: lightCodeTheme,
                    darkTheme: darkCodeTheme,
                },
            }),
    }
);
