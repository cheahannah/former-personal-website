module.exports = {
  siteMetadata: {
    title: `Hannah Chea Resume, Portfolio, and Personal Website`,
    description: `Hannah Chea is a junior UC Berkeley student studying data science, business, and design. She is currently interested in data scientist, data analyst, and data engineer internship positions.`,
    author: `Hannah Chea`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-tinacms",
      options: {
        sidebar: {
          hidden: process.env.NODE_ENV === "production",
          position: "displace",
        },
        plugins: ["gatsby-tinacms-git", "gatsby-tinacms-remark"],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    'gatsby-transformer-remark',
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Hannah Chea Personal Website",
        short_name: "Hannah Chea",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/icon.png", 
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.md', '.mdx'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1000,
            },
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
