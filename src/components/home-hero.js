import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"
import styled from "styled-components"

import Typewriter from 'typewriter-effect';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { FaChevronDown } from 'react-icons/fa';

const HomeHero = () => {

    const data = useStaticQuery(graphql`
        query {
            heroImage: file(relativePath: { eq: "remote-creative-bg.jpg" }) {
            childImageSharp {
                fixed(width: 1800, height: 1013) {
                ...GatsbyImageSharpFixed
                }
            }
            }
        }
    `)

    return(
        <HomeHeroMain>
            <HeroImage>
                <BackgroundImg fluid={data.heroImage.childImageSharp.fixed} alt={"Hero Background"}/>
            </HeroImage>
            <HeroCopy>
                <div>
                    <h1>
                        Unlimited
                        <Typewriter
                            options={{
                                autoStart: true,
                                loop: true,
                            }}
                            onInit={(typewriter) => {
                                typewriter.typeString('Creation')
                                .pauseFor(2500)
                                .deleteAll()
                                .typeString('Innovation')
                                .pauseFor(2500)
                                .deleteAll()
                                .typeString('Inspiration')
                                .pauseFor(2500)
                                .deleteAll()
                                .start();
                            }}
                        />
                    </h1>
                    <p>
                        wordpress development <br/>
                        graphic design <br/>
                        gatsby.js integration
                    </p>
                </div>
            </HeroCopy>
            <HeroScroll>
                <button onClick={() => scrollTo('#home_mission')}><FaChevronDown size={32}/></button>
            </HeroScroll>
        </HomeHeroMain>
    )

}

const HomeHeroMain = styled.div`
    position: relative;
    min-height: 100vh;
    width: 100%;
    background-color: #000;
`

const HeroImage = styled.div`
    position: absolute;
    min-height: 100vh;
    width: 100%;
`

const BackgroundImg = styled(Img)`
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100vh;
    width: 100%;
    img {
        width: 100%;
        height: auto;
    }
`

const HeroCopy = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    > div {
        max-width: 940px;
        width: 100%;
        padding: 0 20px;
    }
    h1 {
        font-family: "Roboto Black";
        font-size: 72px;
        line-height: 1.1;
        text-transform: uppercase;
        color: #fff;
        margin-bottom: 10px;
    }
    p {
        font-family: "Poppins Light";
        font-size: 32px;
        line-height: 1.2;
        color: #fff;
    }
    @media(max-width:900px) {
        text-align: center;
    }
    @media(max-width:600px) {
        h1 {
            font-size: 48px;
        }
        p {
            font-size: 24px;
        }
    }
    @media(max-width:400px) {
        h1 {
            font-size: 36px;
        }
        p {
            font-size: 20px;
        }
    }
`

const HeroScroll = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    button {
        background: transparent;
        border: none;
        outline: 0;
        color: #fff;
        &:hover {
            cursor: pointer;
        }
    }
`

export default HomeHero