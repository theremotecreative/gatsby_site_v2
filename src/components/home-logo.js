import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"
import styled from "styled-components"

const HomeLogo = () => {

    const data = useStaticQuery(graphql`
        query {
            SiteLogo: file(relativePath: { eq: "logo-white-1x.png" }) {
                childImageSharp {
                    fixed(width: 220, height: 76) {
                    ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `)

    return(
        <div>
            <LogoImg fluid={data.SiteLogo.childImageSharp.fixed} alt={"The Remote Creative Logo"}/>
        </div>
    )

}

const LogoImg = styled(Img)`
  height: 76px;
  width: 220px;
  img {
      margin-bottom: 0;
  }
  @media(max-width:767px) {
    height: 45px;
    width: 130px;
  }
`

export default HomeLogo