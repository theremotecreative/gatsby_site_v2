module.exports = {
  siteMetadata: {
    title: `The Remote Creative`,
    description: `Website Design and Development`,
    author: `@theremotecreative`,
    siteUrl: `https://theremotecreative.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-graphcms',
        options: {
          // Your GraphCMS API endpoint. Available from your project settings.
          endpoint: 'https://api-us-east-1.graphcms.com/v2/ckhntsw063txa01xlcijh9j7l/master',
          // A PAT (Permanent Auth Token) for your project. Required if your project is not available publicly, or you want to scope access to a specific content stage (i.e. draft content).
          token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2MDU3NDYwNDAsImF1ZCI6WyJodHRwczovL2FwaS11cy1lYXN0LTEuZ3JhcGhjbXMuY29tL3YyL2NraG50c3cwNjN0eGEwMXhsY2lqaDlqN2wvbWFzdGVyIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiNmUwZjU2ODEtZTc2Ni00ZDQ0LWIyMmUtY2U0YzliOGRkODg2IiwianRpIjoiY2tobzNxZW8xNGNmOTAxejg2Y3g2Y255ZSJ9.T8QOH4FuJMIWHUqyvwkr8cRgBno_C_0-KSJ0HQGRppHV9CkvGLdhn2tsJej2-cjoiL0Nugwv-5ev5W-V5kWUj_9RuFcEn3OpZvtp05sy48X-d1xtMvXWrnKq1sGKLtTi4xI_bcIo9Zlah9snUZG5RbGK4O5DneVtBzV4HCRerBTFntVlrBGnoxs_twmI57dhyAvWx2IzoGbIxoX7huHEthp68JQGn3Z-Q8mqpuMfbN7oWmkRGHOa50Ci0t6o8gwTEd7mKtpRnzNJDmOxfuRMO-jtxfVqpMIApHTywb8pGV8uzAaFgyyq56j23NkTfULHSdOxkYbZmQxhv4pxa-hvEPCPT6UafRTAvfLiySJdhbvneCvUGA3b4wz8_SnZuoWvVgh8hJdIIOvHh9VOp6YWNYnnmK60dtKWLXGq9enhGXirXnoinn0hGVkHoRWz_dkO3Y6eKKV4g2xhAEDL5gmRWO0YixG0oirYQS8rT0-MyKwTRFzvf3Rug6ZrEY2RQA_ahTm81CZXCIw3wc_0006fX72NZz2EyxP9All0jcqDVcuer4vemcRiHkSMSRecCcLZUm4aVxaSDA1JABcDM_ms8TdcLV34j7Eh4KLqBhI2Q4FmFndPMQwQ8shpbWgFUzmC3YMJJYwZLHeqsRUqovasSMyuBxRhkCQm7hUyfhasBTs',
        },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "UA-139848739-1", // Google Analytics / GA
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `the-remote-creative`,
        short_name: `The RC`,
        start_url: `/`,
        background_color: `#272727`,
        theme_color: `#bec8b7`,
        display: `minimal-ui`,
        icon: `src/images/logo-white-1x.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
