import React from "react"

import Layout from "../components/layout"
import HomeHero from "../components/home-hero"
import MissionStatement from "../components/mission-statement"
import HomePortfolio from "../components/home-portfolio"
import HomeContact from "../components/home-contact"
import HomeStrategy from "../components/home-web-strategies"
import SEO from "../components/seo"

import Helmet from 'react-helmet';

const IndexPage = () => (
  <Layout>
    <Helmet>
      <html lang="en" />
      <meta
        name="google-site-verification"
        content="seFkB952K4zYYEFLgBy6uvUVgRyCCiykE0LFQm-XNYE"
      />
    </Helmet>
    <SEO 
    title="Home"
    description="Based in Chicago, connected from anywhere, the Remote Creative is a web development company interested in the future of technology, communication, and innovation, and how these fields can connect people around the world."
    />
    <HomeHero/>
    <MissionStatement/>
    <HomePortfolio/>
    <HomeContact/>
    <HomeStrategy/>
  </Layout>
)

export default IndexPage
