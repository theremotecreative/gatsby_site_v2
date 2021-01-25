import React from "react"

import SubLayout from "../components/sub-layout"
import SEO from "../components/seo"
import GatsbyOne from "../components/gatsby-one"
import GatsbyTwo from "../components/gatsby-two"
import GatsbyPortfolio from "../components/gatsby-portfolio"
import GatsbyContact from "../components/gatsby-contact"

const GatsbyPage = () => (
  <SubLayout>
    <SEO 
    title="Gatsby.js Website Development"
    description="Combine the Gatsby.js framework with the WordPress dashboard to create a lightning fast, App-like, and secure website."
    />
    <GatsbyOne/>
    <GatsbyTwo/>
    <GatsbyPortfolio/>
    <GatsbyContact/>
  </SubLayout>
)

export default GatsbyPage