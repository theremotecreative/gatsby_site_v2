import React from "react"

import SubLayout from "../components/sub-layout"
import SEO from "../components/seo"
import FeaturedPortfolio from "../components/featured-portfolio"

const ProjectPage = () => (
  <SubLayout>
    <SEO 
    title="Featured Portfolio"
    description="WordPress and Gatsby.js in the Chicago area. View all of my latest projects and contact me if you're interested in working together."
    />
    <FeaturedPortfolio/>
  </SubLayout>
)

export default ProjectPage