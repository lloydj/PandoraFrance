module.exports = {
  siteMetadata: {
    title: "Pandora France",
    author: "Lloyd Jong",
    description: "VENTE AU DÉTAIL SUR LE MARCHÉ EN LIGNE"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Pandora-France',
        short_name: 'Pandora',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/pandora-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    // 'gatsby-plugin-offline',
  ],
}
