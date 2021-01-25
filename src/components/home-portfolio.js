import React, { useEffect } from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from "gatsby-image"
import styled from "styled-components"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const HomePortfolio = () => {

    useEffect(() => {

        if (typeof window !== `undefined`) {
            gsap.registerPlugin(ScrollTrigger)
            gsap.core.globals('ScrollTrigger', ScrollTrigger)
        }

        let rowOnetl = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: "#home_portfolio_row_one",
                start: 'top bottom',
                end: 'bottom top',
                id: 'home_portfolio_row_one',
                toggleActions: "play reverse play reverse",
                },
            })
        rowOnetl.to('.row-one-fadein', { opacity: '1', delay: 0.2, duration: 2 })

        let rowTwotl = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: "#home_portfolio_row_two",
                start: 'top bottom',
                end: 'bottom top',
                id: 'home_portfolio_row_two',
                toggleActions: "play reverse play reverse",
                },
            })
        rowTwotl.to('.row-two-fadein', { opacity: '1', delay: 0.2, duration: 2 })

        let rowThreetl = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: "#home_portfolio_row_three",
                start: 'top bottom',
                end: 'bottom top',
                id: 'home_portfolio_row_three',
                toggleActions: "play reverse play reverse",
                },
            })
        rowThreetl.to('.row-three-fadein', { opacity: '1', delay: 0.2, duration: 2 })

    }, []);

    const data = useStaticQuery(graphql`
        query {
            pixelThumb: file(relativePath: { eq: "the-pixel-lab.jpg" }) {
                childImageSharp {
                    fixed(width: 1200, height: 675) {
                    ...GatsbyImageSharpFixed
                    }
                }
            }
            optomiThumb: file(relativePath: { eq: "optomi-thumb.jpg" }) {
                childImageSharp {
                    fixed(width: 956, height: 504) {
                    ...GatsbyImageSharpFixed
                    }
                }
            }
            vabienThumb: file(relativePath: { eq: "mobile-bra-longer.jpg" }) {
                childImageSharp {
                    fixed(width: 1800, height: 2914) {
                    ...GatsbyImageSharpFixed
                    }
                }
            }
            chestersThumb: file(relativePath: { eq: "Wings-light.jpg" }) {
                childImageSharp {
                    fixed(width: 959, height: 639) {
                    ...GatsbyImageSharpFixed
                    }
                }
            }
            baizaarThumb: file(relativePath: { eq: "baizaar-shop.jpg" }) {
                childImageSharp {
                    fixed(width: 1200, height: 1229) {
                    ...GatsbyImageSharpFixed
                    }
                }
            }
            corsourceThumb: file(relativePath: { eq: "corsource-thumb.jpg" }) {
                childImageSharp {
                    fixed(width: 1440, height: 835) {
                    ...GatsbyImageSharpFixed
                    }
                }
            }
            twistThumb: file(relativePath: { eq: "twist-thumb.jpg" }) {
                childImageSharp {
                    fixed(width: 1138, height: 988) {
                    ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `)

    return(
        <SectionMain>
            <PortfolioMain>
                <MobileTitle className={"row-one-fadein"}>
                    <h2>Featured Projects</h2>
                </MobileTitle>
                <RowOne id="home_portfolio_row_one">
                    <PortfolioSquare className={"row-one-fadein"}>
                        <ThumbImg fluid={data.pixelThumb.childImageSharp.fixed} alt={"The Pixel Lab Thumbnail"}/>
                        <HoverCopy>
                            <a href="https://www.thepixellab.net/" target="_blank" rel="noopener noreferrer">
                                <HoverText>
                                    <h3>The Pixel Lab</h3>
                                    <p>e-Store | Graphic Design Products</p>
                                </HoverText>
                            </a>
                        </HoverCopy>
                    </PortfolioSquare>
                    <PortfolioLong className={"row-one-fadein"}>
                        <ThumbImg fluid={data.optomiThumb.childImageSharp.fixed} alt={"Optomi Thumbnail"}/>
                        <HoverCopy>
                            <a href="https://optomi.com/" target="_blank" rel="noopener noreferrer">
                                <HoverText>
                                    <h3>Optomi</h3>
                                    <p>Gatsby.js with WordPress CMS</p>
                                </HoverText>
                            </a>
                        </HoverCopy>
                    </PortfolioLong>
                </RowOne>
                <RowTwo id="home_portfolio_row_two">
                    <PortfolioTall className={"row-two-fadein"}>
                        <ThumbImg fluid={data.vabienThumb.childImageSharp.fixed} alt={"Vabien Thumbnail"}/>
                        <HoverCopy>
                            <a href="https://vabienusa.com/" target="_blank" rel="noopener noreferrer">
                                <HoverText>
                                    <h3>Vabien</h3>
                                    <p>e-Store | Lingerie</p>
                                </HoverText>
                            </a>
                        </HoverCopy>
                    </PortfolioTall>
                    <RowTwoMain>
                        <TitleSection className={"row-two-fadein"}>
                            <h2>Featured <br/><span>Projects</span></h2>
                        </TitleSection>
                        <PortfolioSquare className={"row-two-fadein"}>
                            <ThumbImg fluid={data.chestersThumb.childImageSharp.fixed} alt={"Chester's BBQ Thumbnail"}/>
                            <HoverCopy>
                                <a href="https://chestersbbq.com/" target="_blank" rel="noopener noreferrer">
                                    <HoverText>
                                        <h3>Chester's BBQ</h3>
                                        <p>Restaurant | Order Online</p>
                                    </HoverText>
                                </a>
                            </HoverCopy>
                        </PortfolioSquare>
                        <PortfolioSquare className={"row-two-fadein"}>
                            <ThumbImg fluid={data.baizaarThumb.childImageSharp.fixed} alt={"Baizaar Jewelry Thumbnail"}/>
                            <HoverCopy>
                                <a href="https://baizaarjewelry.com/" target="_blank" rel="noopener noreferrer">
                                    <HoverText>
                                        <h3>Baizaar</h3>
                                        <p>e-Store | Jewelry Shop</p>
                                    </HoverText>
                                </a>
                            </HoverCopy>
                        </PortfolioSquare>
                    </RowTwoMain>
                </RowTwo>
                <RowThree id="home_portfolio_row_three">
                    <PortfolioLong className={"row-three-fadein"}>
                        <ThumbImg fluid={data.corsourceThumb.childImageSharp.fixed} alt={"Corsource Thumbnail"}/>
                            <HoverCopy>
                                <a href="https://www.corsource.com/" target="_blank" rel="noopener noreferrer">
                                    <HoverText>
                                        <h3>Corsource</h3>
                                        <p>Technology Group</p>
                                    </HoverText>
                                </a>
                            </HoverCopy>
                    </PortfolioLong>
                    <PortfolioSquare className={"row-three-fadein"}>
                        <ThumbImg fluid={data.twistThumb.childImageSharp.fixed} alt={"Twist Thumbnail"}/>
                        <HoverCopy>
                            <a href="https://www.twistintegrations.com/" target="_blank" rel="noopener noreferrer">
                                <HoverText>
                                    <h3>Twist</h3>
                                    <p>Marketing Integration</p>
                                </HoverText>
                            </a>
                        </HoverCopy>
                    </PortfolioSquare>
                </RowThree>
            </PortfolioMain>
            <BottomButton>
                <Link
                    to="/featured-projects/"
                >
                View More
                </Link>
            </BottomButton>
        </SectionMain>
    )

}

const ThumbImg = styled(Img)`
    position: absolute;
    top: 0;
    left: 0;
    transition: opacity 1s,transform 1s,-webkit-transform 1s;
`

const HoverCopy = styled.div`
    background-color: rgb(255 255 255 / .3);
    transition-duration: .5s;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    a {
        display: inline-block;
        width: 100%;
        height: 100%;
    }
    @media(max-width: 860px) {
        background-color: transparent;
        opacity: 1;
    }
`

const HoverText = styled.div`
    position: absolute;
    bottom: 20px;
    left: 20px;
    h3 {
        font-family: "Poppins Bold";
        color: #272727;
        margin: 0;
        font-size: 20px;
        line-height: 30px;
    }
    p {
        font-family: "Poppins Light";
        color: #272727;
        margin: 0;
        font-size: 16px;
        line-height: 26px;
    }
    @media(max-width: 860px) {
        background-color: #272727;
        padding: 5px 10px;
        h3,
        p {
            color: #fff;
        }
    }
`

const SectionMain = styled.div`
    min-height: 100vh;
    width: 100%;
    background-color: #f2f2f2;
    padding: 50px 20px;
`

const PortfolioMain = styled.div`
    max-width: 1180px;
    width: 100%;
    margin: 0 auto;
    @media(max-width: 1240px) {
        max-width: 780px;
    }
    @media(max-width: 860px) {
        max-width: 100%;
    }
    @media(max-width: 767px) {
        max-width: 380px;
    }
`

const RowOne = styled.div`
    max-width: 1180px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    @media(max-width: 1240px) {
        max-width: 780px;
    }
    @media(max-width: 860px) {
        max-width: 100%;
        > div {
            &:first-child {
                margin-right: 20px;
            }
        }
    }
    @media(max-width: 767px) {
        flex-wrap: wrap;
        max-width: 380px;
        margin-bottom: 0;
        > div {
            &:first-child {
                margin-right: 0px;
            }
        }
    }
`

const PortfolioSquare = styled.div`
    background-color: #fff;
    height: 380px;
    max-width: 380px;
    width: 100%;
    position: relative;
    overflow: hidden;
    opacity: 0;
    ${ThumbImg} {
        max-width: 380px;
        width: 100%;
        height: 380px;
    }
    &:hover {
        ${ThumbImg} {
            opacity: .9;
            transform: scale3d(1.1,1.1,1);
        }
        ${HoverCopy} {
            opacity: 1;
        }
    }
    @media(max-width: 860px) {
        opacity: 1;
        margin-bottom: 20px;
    }
`

const PortfolioLong = styled.div`
    background-color: #fff;
    height: 380px;
    width: 780px;
    position: relative;
    overflow: hidden;
    opacity: 0;
    ${ThumbImg} {
        max-width: 780px;
        width: 100%;
        height: 380px;
    }
    &:hover {
        ${ThumbImg} {
            opacity: .9;
            transform: scale3d(1.1,1.1,1);
        }
        ${HoverCopy} {
            opacity: 1;
        }
    }
    @media(max-width: 1240px) {
        max-width: 380px;
        ${ThumbImg} {
            max-width: 380px;
        }
    }
    @media(max-width: 860px) {
        opacity: 1;
        margin-bottom: 20px;
    }
`

const RowTwo = styled.div`
    max-width: 1180px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    @media(max-width: 1240px) {
        max-width: 780px;
    }
    @media(max-width: 860px) {
        max-width: 100%;
        > div {
            &:first-child {
                margin-right: 20px;
            }
        }
    }
    @media(max-width: 767px) {
        flex-wrap: wrap;
        max-width: 380px;
        margin-bottom: 0;
        > div {
            &:first-child {
                margin-right: 0px;
            }
        }
    }
`

const PortfolioTall = styled.div`
    background-color: #aaa;
    height: 780px;
    width: 380px;
    position: relative;
    overflow: hidden;
    opacity: 0;
    ${ThumbImg} {
        max-width: 380px;
        width: 100%;
        height: 780px;
    }
    &:hover {
        ${ThumbImg} {
            opacity: .9;
            transform: scale3d(1.1,1.1,1);
        }
        ${HoverCopy} {
            opacity: 1;
        }
    }
    @media(max-width: 860px) {
        opacity: 1;
    }
    @media(max-width: 767px) {
        height: 380px;
        margin-bottom: 20px;
        ${ThumbImg} {
            height: 380px;
        }
    }
`

const RowTwoMain = styled.div`
    height: 780px;
    width: 780px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
    @media(max-width: 1240px) {
        max-width: 380px;
        > div {
            margin-bottom: 20px;
        }
    }
    @media(max-width: 860px) {
        margin-bottom: 20px;
    }
`

const TitleSection = styled.div`
    height: 380px;
    width: 780px;
    margin-bottom: 20px;
    opacity: 0;
    h2 {
        font-size: 72px;
        padding-top: 20px;
        padding-left: 20px;
        span {
            padding-left: 100px;
        }
    }
    @media(max-width: 1240px) {
        display: none;
    }
`

const MobileTitle = styled.div`
    display: none;
    margin-bottom: 20px;
    opacity: 0;
    h2 {
        font-size: 72px;
        text-align: center;
    }
    @media(max-width: 1240px) {
        display: block;
    }
    @media(max-width: 860px) {
        opacity: 1;
        h2 {
            font-size: 36px;
        }
    }
`

const RowThree = styled.div`
    max-width: 1180px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media(max-width: 1240px) {
        max-width: 780px;
    }
    @media(max-width: 860px) {
        max-width: 100%;
        > div {
            &:first-child {
                margin-right: 20px;
            }
        }
    }
    @media(max-width: 767px) {
        flex-wrap: wrap;
        max-width: 380px;
        margin-bottom: 0;
        > div {
            &:first-child {
                margin-right: 0px;
            }
        }
    }
`

const BottomButton = styled.div`
    text-align: center;
    margin-top: 35px;
    a {
        font-family: "Poppins Light";
        padding: 5px 20px;
        display: inline-block;
        background-color: #272727;
        text-decoration: none !important;
        color: #fff !important;
        border-radius: 25px;
        transition-duration: .3s;
        &:hover {
            background-color: #000; 
        }
    }
`

export default HomePortfolio