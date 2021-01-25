import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <MainLayout>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main>{children}</main>
        <Footer>
        <p>© {new Date().getFullYear()}   |   The Remote Creative   |   All Rights Reserved</p>
          {` `}
        </Footer>
      </MainLayout>
    </>
  )
}

const MainLayout = styled.div`
  max-width: 100vw;
  width: 100%;
  background-color: #aaa;
  min-height: 100vh;
  overflow: hidden;
`

const Footer = styled.footer`
  padding: 60px 30px;
  background-color: #181c19;
  border-top-width: 0px;
  border-color: rgba(255,255,255,0.09);
  p {
    font-family: "Poppins Light";
    text-align: center;
    color: #ffffff;
    font-size: 13px;
    margin-bottom: 0px;
  }
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout