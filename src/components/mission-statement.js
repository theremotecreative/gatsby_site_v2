import React from "react"
import styled from "styled-components"

const MissionStatement = () => {

    return(
        <SectionMain id="home_mission">
            <p>Based in Chicago, connected from anywhere, the Remote Creative is a web development company interested in the future of technology, communication, and innovation, and how these fields can connect people around the world.</p>
        </SectionMain>
    )

}

const SectionMain = styled.div`
    min-height: 100vh;
    width: 100%;
    background-color: #272727;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
        font-family: "Poppins Light";
        color: rgba(255,255,255,0.71);
        margin: 0 auto;
        margin-bottom: 0;
        max-width: 1220px;
        padding: 0 20px;
        font-size: 27px;
        line-height: 2;
    }
    @media(max-width:900px) {
        p {
            text-align: center;
        }
    }
    @media(max-width:600px) {
        p {
            font-size: 24px;
            line-height: 1.5
        }
    }
    @media(max-width:400px) {
        p {
            font-size: 20px;
        }
    }
`

export default MissionStatement