/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Hyojin Yoo',
    description: 'Full Stack Developer, committed to building a great user experience with efficiency. Changed careers to software engineering after a decade of work in visual communication design and creative coding. Detail oriented tech junkie.',
    siteUrl: 'https://jinnic.github.io/portfolio', 
    image: '/og.png', // Path to 'static' folder
    icon: '/favicon.ico'
  },
  pathPrefix: "/portfolio",
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,// optimize images
    // `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`, 
    //`gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `HyojinYoo`,
        short_name: `HyojinYoo`,
        start_url: `/`,
        background_color: `#442869`,
        theme_color: `#CDD2E0`,
        display: 'minimal-ui',
        icon: 'src/images/favicon.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content`,
      },
    },
    `gatsby-transformer-remark`,

  ],
  
}
