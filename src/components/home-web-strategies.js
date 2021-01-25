import React, { useEffect } from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from "gatsby-image"
import styled from "styled-components"

import { FaColumns } from 'react-icons/fa';
import { FaMobileAlt } from 'react-icons/fa';
import { FaGlobe } from 'react-icons/fa';
import { FaComment } from 'react-icons/fa';
import { FaMailchimp } from 'react-icons/fa';

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const HomeStrategies = () => {

    useEffect(() => {

        if (typeof window !== `undefined`) {
            gsap.registerPlugin(ScrollTrigger)
            gsap.core.globals('ScrollTrigger', ScrollTrigger)
        }

        let stratOnetl = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: "#home_strategy_row_one",
                start: 'top bottom',
                end: 'bottom top',
                id: 'home_strategy_row_one',
                toggleActions: "play reverse play reverse",
                },
            })
        stratOnetl.to('.strat-row-one-fadein', { opacity: '1', delay: 0.2, duration: 2 })

        let stratTwotl = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: "#home_strategy_row_two",
                start: 'top bottom',
                end: 'bottom top',
                id: 'home_strategy_row_two',
                toggleActions: "play reverse play reverse",
                },
            })
        stratTwotl.to('.strat-row-two-fadein', { opacity: '1', delay: 0.2, duration: 2 })

    }, []);

    const data = useStaticQuery(graphql`
        query {
            gatsbyThumb: file(relativePath: { eq: "wp-and-gatsby-1.png" }) {
                childImageSharp {
                    fixed(width: 789, height: 333) {
                    ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `)

    return(
        <SectionMain>
            <SectionRow id="home_strategy_row_one">
                <HalfRow className={"white-bg strat-row-one-fadein"}>
                    <GatsbyImg fluid={data.gatsbyThumb.childImageSharp.fixed} alt={"Gatsby and WordPress"}/>
                    <h3>WordPress Headless CMS</h3>
                    <p>Combine the user-friendly CMS of WordPress with the speed of Gatsby’s modern static site generator to create blazing fast websites and web apps.</p>
                    <Link
                    to="/gatsby/"
                    >
                        Learn More
                    </Link>
                </HalfRow>
                <HalfRow className={"strat-row-one-fadein"}>
                    <h2>web strategies<br/>
                        for 2021</h2>
                    <p>Interested in any of these new trends? Email me and we can discuss implementing them into your web strategy</p>
                </HalfRow>
            </SectionRow>
            <SectionRow id="home_strategy_row_two">
                <ThirdRow className={"strat-row-two-fadein"}>
                    <IconElement><FaColumns size={44}/></IconElement>
                    <h3>A/B Testing</h3>
                    <p>With Google Optimize and Google Analytics, display different versions of your web pages and determine which one drives more conversions.</p>
                </ThirdRow>
                <ThirdRow className={"strat-row-two-fadein"}>
                    <IconElement><FaMobileAlt size={44}/></IconElement>
                    <h3>Responsive Design</h3>
                    <p>Does your site look good on mobile? What was a nice bonus in the past is now a requirement for modern users.</p>
                </ThirdRow>
                <ThirdRow className={"strat-row-two-fadein"}>
                    <IconElement><FaGlobe size={44}/></IconElement>
                    <h3>Better Hosting</h3>
                    <p>Still stuck with slow speed or terrible support? Switch to a better hosting plan that’s tailor made for your website.</p>
                </ThirdRow>
                <ThirdRow className={"strat-row-two-fadein"}>
                    <IconElement><FaComment size={44}/></IconElement>
                    <h3>Chatbot Support</h3>
                    <p>Use services like Form XO or BotPress to add automated chat support to your site, saving you time and resources.</p>
                </ThirdRow>
                <ThirdRow className={"strat-row-two-fadein"}>
                    <IconElement><FaMailchimp size={44}/></IconElement>
                    <h3>Mailchimp Email Campaign</h3>
                    <p>Collect leads and communicate with potential customers using Mailchimp’s free services.</p>
                </ThirdRow>
            </SectionRow>
        </SectionMain>
    )

}

const SectionMain = styled.div`
    width: 100%;
    background-color: #dbe3e4;
    padding: 100px 20px;
`

const SectionRow = styled.div`
    max-width: 1180px;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

const HalfRow = styled.div`
    width: 50%;
    opacity: 0;
    h2 {
        font-family: "Poppins Bold";
        font-size: 72px;
        text-align: right;
    }
    p {
        font-family: "Poppins Light";
        font-size: 18px;
        line-height: 28px;
        color: #333;
        margin-bottom: 20px;
        text-align: right;
    }
    &.white-bg {
        background-color: #fff;
        padding: 40px;
        border-radius: 10px;
        box-shadow: 3px 3px 6px rgba(0,0,0,.1);
        h3 {
            font-family: "Poppins Bold";
            margin-bottom: 0px;
            font-size: 24px;
            color: #272727;
            font-weight: 900;
            line-height: 34px;
        }
        p {
            font-family: "Poppins Light";
            font-size: 18px;
            line-height: 28px;
            color: #333;
            margin-bottom: 20px;
            text-align: left;
        }
        a {
            font-family: "Poppins Light";
            padding: 5px 20px;
            display: inline-block;
            background-color: #444;
            color: #fff !important;
            border-radius: 25px;
            text-decoration: none;
            transition-duration: .3s;
            &:hover {
                background-color: #222;
            }
        }
    }
    @media(max-width:1100px) {
        width: 100%;
        opacity: 1;
        &:first-child {
            order: 2;
            text-align: center;
            p {
                text-align: center;
            }
        }
        &:last-child {
            order: 1;
            margin-bottom: 50px;
            h2 {
                text-align: left;
            }
            p {
                text-align: left;
            }
        }
    }
    @media(max-width:900px) {
        &:last-child {
            h2 {
                text-align: center;
            }
            p {
                text-align: center;
            }
        }
    }
    @media(max-width:860px) {
        &:last-child {
            h2 {
                font-size: 36px;
            }
        }
    }
`

const GatsbyImg = styled(Img)`
    width: 400px;
    height: 169px;
    margin: 0 auto;
    margin-bottom: 20px;
    @media(max-width:540px) {
        width: 200px;
        height: 84px;
    }
`

const IconElement = styled.div`
    height: 88px;
    width: 88px;
    margin: 0 auto;
    margin-bottom: 10px;
    border-color: #aabeaf;
    background-color: #aabeaf;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ThirdRow = styled.div`
    width: 33%;
    opacity: 0;
    padding: 0 20px;
    margin-bottom: 35px;
    h3 {
        font-family: "Poppins Bold";
        margin-bottom: 0px;
        font-size: 24px;
        color: #272727;
        font-weight: 900;
        line-height: 34px;
        text-align: center;
    }
    p {
        font-family: "Poppins Light";
        font-size: 18px;
        line-height: 28px;
        color: #333;
        margin-bottom: 20px;
        text-align: center;
    }
    @media(max-width:1100px) {
        opacity: 1;
    }
    @media(max-width:860px) {
        width: 50%;
    }
    @media(max-width:600px) {
        width: 100%;
    }
`


export default HomeStrategies