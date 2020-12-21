require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteUrl: `https://yukisato.dev`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-preconnect",
      options: {
        domains: ["https://images.ctfassets.net"],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `YukiSato.Dev`,
        short_name: `YukiDev`,
        start_url: `/blog`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/favicon-96x96.png`, // This path is relative to the root of the site.
      },
    },
    // For sitemap.xml
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: "/sitemap.xml",
        exclude: [
          `/dev-404-page`,
          `/404`,
          `/404.html`,
          `/offline-plugin-app-shell-fallback`,
        ],
        createLinkInHead: true, // optional: create a link in the `<head>` of your site
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage: allContentfulBlog {
            nodes {
              title
              path: slug
              node_locale
              updatedAt
            }
          }
          allContentfulTag {
            nodes {
              slug
              node_locale
            }
          }
        }`,
        serialize: ({ site, allSitePage, allContentfulTag }) => {
          const siteUrl = site.siteMetadata.siteUrl

          const blogIndices = ["ja", "en"].map(locale => {
            return {
              url: `${siteUrl}/${locale}/blog`,
              changefreq: `daily`,
              priority: 0.7,
            }
          })

          const pages = allSitePage.nodes
            .filter(node => node.title !== null)
            .map(({ node_locale, path }) => {
              return {
                url: `${siteUrl}/${node_locale}/blog/${path}`,
                changefreq: `daily`,
                priority: 0.7,
              }
            })

          const tags = allContentfulTag.nodes.map(({ node_locale, slug }) => {
            return {
              url: `${siteUrl}/${node_locale}/blog/tag/${slug}`,
              changefreq: `daily`,
              priority: 0.7,
            }
          })

          return blogIndices.concat(pages).concat(tags)
        },
      },
    },
    // To fetch data from Contentful via GraphQL
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    // Use react intl for i18n
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: [`en`, `ja`],
        // language file path
        defaultLanguage: `ja`,
        // option to redirect to `/en` when connecting `/`
        redirect: true,
      },
    },
    // Turn markdown into html
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          // Code highlighting
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              showLineNumbers: false,
              noInlineHighlight: true,
            },
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
