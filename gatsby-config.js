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
    image: '/og.png' // Path to 'static' folder
  },
  pathPrefix: "/portfolio",
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    // `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        icon: 'src/images/favicon.ico'
      }
    }, // optimize images
    `gatsby-transformer-sharp`, 
    //`gatsby-plugin-sitemap`,
    // {
    //   resolve: `gatsby-plugin-typography`,
    //   options: {
    //     pathToConfigModule: `src/utils/typography`,
    //   },
    // },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content`,
      },
    },
    `gatsby-transformer-remark`,
    // {
    //   resolve: 'gatsby-plugin-web-font-loader',
    //   options: {
    //     google: {
    //       families: ['Karla']
    //     },
    //     google: {
    //       families: ['Lora']
    //     }
    //   }
    // },
    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: `Lora`,
    //         subsets: [`serif`],
    //         variants: [`400`, `700`]
    //       },
    //       {
    //         family: `Karla`,
    //         subsets: [`sans-serif`],
    //         variants: [`400`, `700`]
    //       },
    //     ],
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-google-fonts`,
    //   options: {
    //     fonts: [
    //       `Lora`,
    //       `source sans pro\:400,700` // you can also specify font weights and styles
    //     ],
    //     display: 'swap'
    //   }
    // }

  ],
  
}

// {
//   resolve: 'gatsby-source-filesystem',
//   options: {
//     name: 'projects',
//     path: `${__dirname}/content/projects`,
//   },
// },