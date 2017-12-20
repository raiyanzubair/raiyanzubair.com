module.exports = {
  siteMetadata: {
    title: `Raiyan Zubair`,
  },
  plugins: [
	  `gatsby-plugin-react-helmet`,
	  {
	  	resolve: `gatsby-plugin-typography`,
	  	options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
	  },
  ],
}
